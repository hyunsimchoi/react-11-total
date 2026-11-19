import ProjectCard from "../components/ProjectCard.tsx";

function Home() {
    return (
        <div>
            <h1>My Project Dashboard</h1>
            <p>지금까지 구축한 포트폴리오 리스트입니다.</p>

            <ProjectCard />
        </div>
    );
}

export default Home;
