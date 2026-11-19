import { Link } from "react-router";

type ProjectCardProps = {
    icon: string;
    title: string;
    description: string;
    path?: string;
};

function ProjectCard({ icon, title, description, path }: ProjectCardProps) {
    const content = (
        <div>
            <h2>
                {icon} {title}
            </h2>
            <p>{description}</p>
        </div>
    );

    if (!path) {
        return content;
    }

    return <Link to={path}>{content}</Link>;
}

export default ProjectCard;
