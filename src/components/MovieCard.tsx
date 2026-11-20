import { Link } from "react-router";
import styled from "styled-components";
import type { MovieItem } from "../pages/movie/Movie";

// 영화 카드 전체
const StyledLink = styled(Link)`
    width: 200px;
    padding: 12px;
    border-radius: 12px;

    display: flex;
    flex-direction: column;
    gap: 10px;

    background: #f4e9c9;
    color: #252b13;
    text-decoration: none;

    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    transition:
        transform 0.3s,
        box-shadow 0.3s;

    &:hover {
        transform: translateY(-6px) scale(1.03);
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
    }

    body.black-theme & {
        background: #252525;
        color: #ffffff;
        border: 1px solid #404040;
    }

    body.black-theme &:hover {
        background: #303030;
    }
`;

// 영화 포스터
const Poster = styled.img`
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 8px;
`;

// 포스터가 없는 경우
const NoPoster = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 250px;
    border-radius: 8px;
    background: #b9bd90;
    color: #252b13;
    text-align: center;

    body.black-theme & {
        background: #414141;
        color: #ffffff;
    }
`;

// 영화 제목
const MovieTitle = styled.h3`
    margin: 0;
    font-size: 16px;
    line-height: 1.5;
`;

// 개봉 연도
const MovieYear = styled.span`
    margin-top: auto;
    font-size: 14px;
    opacity: 0.7;
`;

// 영화 카드 컴포넌트
function MovieCard({ movie }: { movie: MovieItem }) {
    return (
        <StyledLink to={`/movie/detail/${movie.imdbID}`}>
            {movie.Poster && movie.Poster !== "N/A" ? (
                <Poster src={movie.Poster} alt={movie.Title} />
            ) : (
                <NoPoster>포스터 없음</NoPoster>
            )}

            <MovieTitle>{movie.Title}</MovieTitle>
            <MovieYear>{movie.Year}</MovieYear>
        </StyledLink>
    );
}

export default MovieCard;
