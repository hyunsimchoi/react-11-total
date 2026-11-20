import ProjectCard from "../components/ProjectCard.tsx";

function Home() {
    return (
        <div>
            <section className="dashboard-banner">
                <h1>My Project Dashboard</h1>
                <p>지금까지 구축한 포트폴리오 리스트입니다.</p>
            </section>

            <section className="project-grid">
                <ProjectCard
                    icon="**"
                    title="투두"
                    description="체계적인 일정 관리와 할 일 목록 기록"
                    path="/todo"
                />

                <ProjectCard
                    icon="**"
                    title="코인트래커"
                    description="실시간 가상화폐 시세 확인 및 정보 트래킹"
                    path="/coin"
                />

                <ProjectCard
                    icon="**"
                    title="무비"
                    description="영화 데이터베이스 API를 활용한 영화 검색"
                    path="/movie"
                />

                <ProjectCard
                    icon="**"
                    title="상품"
                    description="상품 조회"
                    path="/product"
                />

                <ProjectCard
                    icon="**"
                    title="북스"
                    description="구글 도서 데이터를 활용한 온라인 책 검색"
                    path="/book"
                />

                <ProjectCard
                    icon="**"
                    title="게시판"
                    description="게시글을 작성하고 확인하는 공간"
                    path="/board"
                />
            </section>
        </div>
    );
}

export default Home;
