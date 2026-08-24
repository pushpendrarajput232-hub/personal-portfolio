function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "Python", "C", "C++", "JavaScript"],
    },
    {
      title: "Web Development",
      skills: ["HTML", "CSS", "JavaScript", "React.js", "Bootstrap"],
    },
    {
      title: "Backend & Database",
      skills: ["Node.js", "Express.js", "MySQL", "MongoDB", "REST APIs"],
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "GitHub", "VS Code", "IntelliJ IDEA", "Postman"],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">

        <div className="skills-heading">
          <p className="section-subtitle">MY SKILLS</p>

          <h2>
            Technical Skills
          </h2>

          <p>
            Technologies and tools I use to build applications,
            solve problems, and develop my software engineering skills.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div className="skill-card" key={index}>

              <h3>{category.title}</h3>

              <div className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <span className="skill-tag" key={skillIndex}>
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;