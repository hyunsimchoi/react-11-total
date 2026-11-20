import ProjectCard from "../components/ProjectCard.tsx";
import styled from "styled-components";
import {
    FaListCheck,
    FaCoins,
    FaFilm,
    FaBagShopping,
    FaBookOpen,
    FaPenToSquare,
} from "react-icons/fa6";

// Home 페이지 전체
const HomePage = styled.main`
  padding: 36px;

  @media (max-width: 600px) {
    padding: 20px;
  }
`;

// Home 상단 배너
const Banner = styled.section`
  padding: 36px;
  margin-bottom: 28px;
  border-radius: 18px;
  background: #454a2a;

  body.black-theme & {
    background: #171717;
  }
`;

// 프로젝트 카드 배치
const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

function Home() {
    return (
        <HomePage>
            <Banner>
                <h1>My Project Dashboard</h1>
                <p>지금까지 구축한 포트폴리오 리스트입니다.</p>
            </Banner>

            <ProjectGrid>
                <ProjectCard
                    icon={<FaListCheck />}
                    title="투두"
                    description="체계적인 일정 관리와 할 일 목록 기록"
                    path="/todo"
                />

                <ProjectCard
                    icon={<FaCoins />}
                    title="코인트래커"
                    description="실시간 가상화폐 시세 확인 및 정보 트래킹"
                    path="/coin"
                />

                <ProjectCard
                    icon={<FaFilm />}
                    title="무비"
                    description="영화 데이터베이스 API를 활용한 영화 검색"
                    path="/movie"
                />

                <ProjectCard
                    icon={<FaBagShopping />}
                    title="상품"
                    description="상품 조회"
                    path="/product"
                />

                <ProjectCard
                    icon={<FaBookOpen />}
                    title="북스"
                    description="구글 도서 데이터를 활용한 온라인 책 검색"
                    path="/book"
                />

                <ProjectCard
                    icon={<FaPenToSquare />}
                    title="게시판"
                    description="게시글을 작성하고 확인하는 공간"
                    path="/board"
                />
            </ProjectGrid>
        </HomePage>
    );
}

export default Home;
