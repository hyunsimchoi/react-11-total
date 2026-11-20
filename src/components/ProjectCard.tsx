import styled from "styled-components";
import { Link } from "react-router";

import type { ReactNode } from "react";
type ProjectCardProps = {
    icon: ReactNode;
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

    /* 움직임을 부드럽게 */
    transition:
        transform 0.3s,
        box-shadow 0.3s;

    /* 짝수 카드 배경 */
    &:nth-child(even) {
        background: #b9bd90;
    }

    /* 마우스를 올렸을 때 */
    &:hover {
        transform: translateY(-8px);
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.25);
    }

    /* 블랙 테마 */
    body.black-theme &,
    body.black-theme &:nth-child(even) {
        background: #252525;
        color: #ffffff;
        border: 1px solid #404040;
    }

    /* 블랙 테마에서 마우스를 올렸을 때 */
    body.black-theme &:hover {
        background: #303030;
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.5);
    }
`;

// 아이콘
const CardIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 38px;
    color: #626b3e;

    transition: transform 0.3s;

    /* 카드에 마우스를 올리면 아이콘 확대 */
    ${Card}:hover & {
        transform: scale(1.2);
        cursor: pointer;
    }

    body.black-theme & {
        color: #c6cc9a;
    }
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
