import { useSearchParams } from "react-router";
import { useEffect, useState } from "react";
import styled from "styled-components";

import SearchBar from "../../components/SearchBar";
import MovieCard from "../../components/MovieCard";

// 영화 데이터의 형태
export type MovieItem = {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
};
// 검색하지 않았을 때 보여줄 추천 영화
const featuredMovieIds = [
    "tt0133093", // The Matrix
    "tt0816692", // Interstellar
    "tt1375666", // Inception
    "tt0468569", // The Dark Knight
    "tt0848228", // The Avengers
];

// 영화 페이지 전체
const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 30px;
`;

// 검색 결과 카드 배치
const List = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 40px;
    justify-content: center;
`;

function Movie() {
    // 주소에서 검색어 가져오기
    const [searchParams] = useSearchParams();
    const keyword = searchParams.get("keyword");

    // 영화 목록
    const [list, setList] = useState<MovieItem[]>([]);

    // 로딩과 오류
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        let cancelled = false;

        setList([]);
        setLoading(true);
        setError("");

        async function loadMovies() {
            try {
                // 검색어가 있다면 기존 영화 검색
                if (keyword?.trim()) {
                    const response = await fetch(
                        `https://www.omdbapi.com/?apikey=6a0a8eb4&s=${encodeURIComponent(keyword.trim())}&type=movie`,
                    );

                    if (!response.ok) {
                        throw new Error("영화 검색 요청에 실패했습니다.");
                    }

                    const json = await response.json();

                    if (json.Response === "False") {
                        throw new Error(json.Error || "검색 결과가 없습니다.");
                    }

                    if (!cancelled) {
                        setList(Array.isArray(json.Search) ? json.Search : []);
                    }
                } else {
                    // 검색어가 없다면 추천 영화 가져오기
                    const movies = await Promise.all(
                        featuredMovieIds.map(async id => {
                            const response = await fetch(
                                `https://www.omdbapi.com/?apikey=6a0a8eb4&i=${id}`,
                            );

                            if (!response.ok) {
                                throw new Error("추천 영화 요청에 실패했습니다.");
                            }

                            return response.json();
                        }),
                    );

                    if (!cancelled) {
                        setList(movies.filter(movie => movie.Response === "True"));
                    }
                }
            } catch (err) {
                if (!cancelled) {
                    setError(err instanceof Error ? err.message : "영화를 불러오지 못했습니다.");
                }
            } finally {
                if (!cancelled) {
                    setLoading(false);
                }
            }
        }

        loadMovies();

        return () => {
            cancelled = true;
        };
    }, [keyword]);

    return (
        <Container>
            <h1>Movie Search</h1>
            <p>영화 제목을 검색해 보세요.</p>

            <SearchBar keyword={keyword} />
            {!keyword && <p>검색어를 입력하면 영화 목록이 나타납니다.</p>}

            {loading && <p>영화 검색 중...</p>}

            {error && <p>{error}</p>}

            <h2>{keyword ? `검색 결과: ${keyword}` : "추천 영화"}</h2>

            {!loading && !error && (
                <List>
                    {list.map(movie => (
                        <MovieCard key={movie.imdbID} movie={movie} />
                    ))}
                </List>
            )}
        </Container>
    );
}

export default Movie;
