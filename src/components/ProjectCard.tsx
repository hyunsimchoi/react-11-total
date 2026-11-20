import styled from "styled-components";
import { Link } from "react-router";

type ProjectCardProps = {
    icon: string;
    title: string;
    description: string;
    path: string;
};

// 카드 전체
const Card = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;

    min-height: 180px;
    height: 100%;
    padding: 28px;

    border-radius: 18px;
    background: #f4e9c9;
    color: #222819;
    text-align: center;
    text-decoration: none;

    &:nth-child(even) {
        background: #b9bd90;
    }

    &:hover {
        transform: translateY(-4px);
    }

    transition: transform 0.2s;

    body.black-theme &,
    body.black-theme &:nth-child(even) {
        background: #252525;
        color: #ffffff;
        border: 1px solid #404040;
    }
`;

// 아이콘
const CardIcon = styled.div`
    font-size: 36px;
`;

// 제목
const CardTitle = styled.h2`
    margin: 0;
    font-size: 22px;
`;

// 설명
const CardDescription = styled.p`
    margin: 0;
    font-size: 14px;
    line-height: 1.6;
`;

// 프로젝트 카드 컴포넌트
function ProjectCard({ icon, title, description, path }: ProjectCardProps) {
    return (
        <Card to={path}>
            <CardIcon>{icon}</CardIcon>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
        </Card>
    );
}

export default ProjectCard;
