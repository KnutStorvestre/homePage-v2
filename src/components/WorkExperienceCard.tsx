import "../styles/WorkExperienceCard.css";

interface WorkExperienceCardProps {
  timePeriod: string;
  position: string;
  company: string;
  description: string;
  links: string[];
  technologies: string[];
}

const WorkExperienceCard: React.FC<WorkExperienceCardProps> = ({
  timePeriod,
  position,
  company,
  description,
  links,
  technologies,
}) => {
  return (
    <div className="work-experience-card">
      <h3 className="work-time-period">{timePeriod}</h3>
      <h2 className="work-position">{position}</h2>
      <h3 className="work-company">{company}</h3>
      <p className="work-description">{description}</p>
      <ul className="work-links">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link} target="_blank" rel="noopener noreferrer">
              {link}
            </a>
          </li>
        ))}
      </ul>
      <ul className="work-technologies">
        {technologies.map((tech, index) => (
          <li key={index} className="technology-item">
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkExperienceCard;
