function Projects() {
  const projects = [
    {
      title: "SmartPicks",
      description:
        "An intelligent recommendation-based application designed to provide personalized product suggestions using data-driven techniques.",
      technologies: ["Python", "Machine Learning", "Web Development"],
      githubUrl: "https://github.com/",
      liveUrl: "#",
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">

        <div className="projects-heading">
          <p className="section-subtitle">MY WORK</p>

          <h2>Projects</h2>

          <p>
            Here are some of the projects I have worked on while developing
            my technical and problem-solving skills.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>

              <div className="project-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((technology, techIndex) => (
                    <span key={techIndex} className="project-tech">
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="project-buttons">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn github-btn"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn live-btn"
                  >
                    Live Demo
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;