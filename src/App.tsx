import { useEffect, useState } from "react";
import WorkExperienceCard from "./components/WorkExperienceCard";
import "./styles/Styles.css";

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: MouseEvent) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const workExperiences = [
    {
      timePeriod: "2024-present",
      position: "Software Engineer",
      company: "Tech Innovators Inc.",
      description:
        "Developed scalable web applications and led a team of junior developers.",
      links: ["https://example.com/project1", "https://example.com/project2"],
      technologies: ["React", "Node.js", "MongoDB", "Docker"],
    },
    {
      timePeriod: "2022-2024",
      position: "Frontend Developer",
      company: "Creative Solutions Co.",
      description:
        "Designed and implemented user-friendly interfaces for e-commerce platforms.",
      links: ["https://example.com/design1", "https://example.com/design2"],
      technologies: ["Vue.js", "Sass", "GraphQL", "Git"],
    },
    {
      timePeriod: "2020-2022",
      position: "Intern Developer",
      company: "Startup X",
      description:
        "Contributed to developing a mobile app for event management.",
      links: ["https://example.com/app1"],
      technologies: ["React Native", "Firebase", "Redux"],
    },
  ];

  return (
    <div
      className="background-overlay navy-background"
      style={{
        background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
      }}
    >
      <div className="text-containers">
        <div className="flex-space-between">
          <div>
            <h1 className="name-header">Knut Storvestre</h1>
            <h2 className="short-description">Masters in informatics</h2>
            <p className="long-description">
              Master's in informatics with specialization in Secure and Reliable
              Communication
            </p>
            <ul>
              <li>About</li>
              <li>Experience</li>
              <li>Projects</li>
            </ul>
          </div>
          <div>
            <ul className="icon-list">
              <li>asdf</li>
              <li>asdf</li>
            </ul>
          </div>
        </div>
        <div className="right-column">
          <div className="about-paragraphs">
            <p className="about-paragraph">
              I am a software developer with a Master's degree in Secure and
              Reliable Communication. I have experience with web development,
              mobile development, and backend development. I am passionate about
              software development and I am always looking for new challenges.
            </p>
            <p className="about-paragraph">
              I have experience with the following technologies: React, React
              Native, Node.js, Express, MongoDB, PostgreSQL, Docker, Kubernetes,
              and Git. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Obcaecati consequatur, possimus dicta, perferendis harum deserunt
              fuga ad error tempore nostrum maiores tempora laboriosam dolor
              quos porro omnis neque laudantium! Tempore!
            </p>
            <p className="about-paragraph">
              I have experience with the following technologies: React, React
              Native, Node.js, Express, MongoDB, PostgreSQL, Docker, Kubernetes,
              and Git. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Obcaecati consequatur, possimus dicta, perferendis harum deserunt
              fuga ad error tempore nostrum maiores tempora laboriosam dolor
              quos porro omnis neque laudantium! Tempore!
            </p>
            <p className="about-paragraph">
              I have experience with the following technologies: React, React
              Native, Node.js, Express, MongoDB, PostgreSQL, Docker, Kubernetes,
              and Git. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Obcaecati consequatur, possimus dicta, perferendis harum deserunt
              fuga ad error tempore nostrum maiores tempora laboriosam dolor
              quos porro omnis neque laudantium! Tempore!
            </p>
          </div>
          <div className="work-experience-container">
            {workExperiences.map((experience, index) => (
              <WorkExperienceCard key={index} {...experience} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
