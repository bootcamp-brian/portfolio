export default function PortfolioItem({ projectName, projectURL, projectImage, projectDescription }) {
    return (
        <div className="portfolio-item">
            <h3>
                <a href={projectURL} target="_blank" rel="noreferrer" >{projectName}</a>
            </h3>
            <img src={projectImage} className="project-image" alt="Fitness Tracker" />
            <p>{projectDescription}</p>
        </div>
    )
}