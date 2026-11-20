import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { FaArrowLeft, FaStar } from "react-icons/fa6";

// 영화 상세 데이터 타입
type MovieDetailItem = {
    Title: string;
    Year: string;
    Genre: string;
    Director: string;
    Actors: string;
    Plot: string;
    Poster: string;
    imdbRating: string;
    Runtime: string;
};

// 전체 상세 페이지
const Container = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    padding: 30px;

    @media (max-width: 600px) {
        padding: 20px;
    }
`;

// 뒤로 가기 버튼
const BackBtn = styled.button`
    display: inline-flex;
    align-items: center;
    gap: 8px;

    margin-bottom: 24px;
    padding: 10px 16px;

    background: #454a2a;
    border: 1px solid #77764b;
    border-radius: 10px;
    color: #f5ecd2;
    cursor: pointer;

    &:hover {
        background: #555c35;
    }

    body.black-theme & {
        background: #252525;
        border-color: #505050;
        color: #ffffff;
    }
`;

// 포스터와 영화 정보 좌우 배치
const DetailLayout = styled.div`
    display: grid;
    grid-template-columns: 280px minmax(0, 1fr);
    gap: 32px;
    align-items: start;

    @media (max-width: 700px) {
        grid-template-columns: 1fr;
    }
`;

// 영화 포스터
const Poster = styled.img`
    width: 100%;
    max-width: 280px;
    border-radius: 14px;
    object-fit: cover;
`;

// 포스터가 없는 경우
const NoPoster = styled.div`
    width: 100%;
    max-width: 280px;
    min-height: 380px;
    border-radius: 14px;
    background: #454a2a;

    display: flex;
    align-items: center;
    justify-content: center;
    color: #f5ecd2;

    body.black-theme & {
        background: #252525;
    }
`;

// 영화 제목과 설명
const DetailInfo = styled.div`
    min-width: 0;

    h1 {
        margin: 0 0 20px;
        font-size: 32px;
    }

    p {
        margin: 12px 0;
        line-height: 1.7;
    }

    strong {
        color: #d5dcaa;
    }

    body.black-theme & strong {
        color: #c6cc9a;
    }
`;

// 영화 줄거리
const Plot = styled.p`
    margin-top: 28px !important;
    padding-top: 20px;
    border-top: 1px solid #77764b;
    line-height: 1.8 !important;

    body.black-theme & {
        border-top-color: #404040;
    }
`;

// 영화 평점
const Rating = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-top: 12px;

    color: #f5d881;
    font-size: 20px;
    font-weight: bold;
`;

function MovieDetail() {
    // URL에서 영화 ID 가져오기
    const { imdbID } = useParams();

    const navigate = useNavigate();

    // 상세 데이터 저장
    const [movie, setMovie] = useState<MovieDetailItem | null>(null);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        if (!imdbID) {
            setError("영화 ID가 없습니다.");
            setLoading(false);
            return;
        }

        setMovie(null);
        setError("");
        setLoading(true);

        fetch(`https://www.omdbapi.com/?apikey=6a0a8eb4&i=${encodeURIComponent(imdbID)}&plot=full`)
            .then(res => {
                if (!res.ok) {
                    throw new Error("HTTP 오류: " + res.status);
                }

                return res.json();
            })
            .then(json => {
                if (json.Response === "False") {
                    throw new Error(json.Error || "영화 정보를 찾을 수 없습니다.");
                }

                setMovie(json);
            })
            .catch(err => {
                console.error("영화 상세 정보 오류:", err);
                setError("영화 상세 정보를 불러오지 못했습니다.");
            })
            .finally(() => {
                setLoading(false);
            });
    }, [imdbID]);

    if (loading) {
        return (
            <Container>
                <p>영화 상세 정보를 불러오는 중...</p>
            </Container>
        );
    }

    if (error) {
        return (
            <Container>
                <BackBtn type="button" onClick={() => navigate(-1)}>
                    <FaArrowLeft /> 뒤로 가기
                </BackBtn>
                <p>{error}</p>
            </Container>
        );
    }

    if (!movie) {
        return (
            <Container>
                <p>영화 정보가 없습니다.</p>
            </Container>
        );
    }

    return (
        <Container>
            <BackBtn type="button" onClick={() => navigate(-1)}>
                <FaArrowLeft /> 뒤로 가기
            </BackBtn>

            <DetailLayout>
                {movie.Poster && movie.Poster !== "N/A" ? (
                    <Poster src={movie.Poster} alt={movie.Title} />
                ) : (
                    <NoPoster>포스터 없음</NoPoster>
                )}

                <DetailInfo>
                    <h1>{movie.Title}</h1>

                    <p>
                        <strong>개봉 연도:</strong> {movie.Year}
                    </p>

                    <p>
                        <strong>장르:</strong> {movie.Genre}
                    </p>

                    <p>
                        <strong>감독:</strong> {movie.Director}
                    </p>

                    <p>
                        <strong>출연:</strong> {movie.Actors}
                    </p>

                    <p>
                        <strong>상영 시간:</strong> {movie.Runtime}
                    </p>

                    {movie.imdbRating !== "N/A" && (
                        <Rating>
                            <FaStar />
                            {movie.imdbRating} / 10
                        </Rating>
                    )}

                    <Plot>
                        <strong>줄거리</strong>
                        <br />
                        {movie.Plot}
                    </Plot>
                </DetailInfo>
            </DetailLayout>
        </Container>
    );
}

export default MovieDetail;
