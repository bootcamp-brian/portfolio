import p1image from "../images/pp-ss.png";
import p2image from "../images/ft-ss.png";
import p3image from "../images/c4-ss.png";
import PortfolioItem from "./PortfolioItem";

export default function Portfolio() {
  const projects = [
    {
      projectID: 1,
      projectName: "Puppy Paradise",
      projectImage: p1image,
      projectURL: "https://fluffy-trifle-fba9bc.netlify.app/",
      projectDescription: "Some text"
    },
    {
      projectID: 2,
      projectName: "Fitness Track.r",
      projectImage: p2image,
      projectURL: "https://relaxed-torrone-8e362c.netlify.app/",
      projectDescription: "Some text"
    },
    {
      projectID: 3,
      projectName: "Connect 4",
      projectImage: p3image,
      projectURL: "https://subtle-khapse-befbf2.netlify.app/",
      projectDescription: "Some text"
    }
  ]
  return (    
      <section id="portfolio" className="section">
        <h2>Portfolio</h2>
        {
          projects.map(project => {
            const {
              projectID,
              projectName,
              projectImage,
              projectURL,
              projectDescription
            } = project;

            return(
              <PortfolioItem
                key={projectID}
                projectName={projectName}
                projectImage={projectImage}
                projectURL={projectURL}
                projectDescription={projectDescription}
              />
            )
          })
        }
      </section>
  )
}