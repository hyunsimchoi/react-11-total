type ProjectCardProps = {
    icon: string;
    title: string;
    description: string;
};

function ProjectCard({ icon, title, description }: ProjectCardProps) {
    return (
        <div>
            <h2>
                {icon} {title}
            </h2>
            <p>{description}</p>
        </div>
    );
}

export default ProjectCard;
