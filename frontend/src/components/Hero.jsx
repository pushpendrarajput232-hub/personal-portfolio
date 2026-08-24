function Hero() {
  return (
    <section id="home" className="hero-section">

      <div className="hero-content">

        <p className="hero-greeting">
          Hello, I'm
        </p>

        <h1>
          Pushpendra Rajput
        </h1>

        <h2>
          Java Full Stack Developer
        </h2>

        <p className="hero-description">
          Computer Science undergraduate passionate about
          building web applications, software solutions,
          and AI-based applications.
        </p>

        <div className="hero-buttons">

          <a
            href="#projects"
            className="hero-btn primary-btn"
          >
            View My Projects
          </a>

          <a
            href="/resume/Pushpendra-Rajput-Resume.docx"
            className="hero-btn secondary-btn"
            download
          >
            Download Resume
          </a>

        </div>

        {/* Social Media Icons */}
        <div className="hero-socials">

          {/* GitHub */}
          <a
            href="https://github.com/pushpendrarajput232-hub?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="hero-social-icon"
            >
              <path
                fill="currentColor"
                d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.15c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.24 3.32.95.1-.74.4-1.24.73-1.52-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18A10.9 10.9 0 0 1 12 8.27c.97 0 1.94.13 2.85.38 2.18-1.49 3.14-1.18 3.14-1.18.63 1.59.24 2.77.12 3.06.73.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.41.35.78 1.04.78 2.1v3.11c0 .3.2.66.79.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
              />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/pushpendra-rajput-219885429/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="hero-social-icon"
            >
              <path
                fill="currentColor"
                d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.3ZM5.32 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.54 20.45H7.1V8.99H3.54v11.46ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z"
              />
            </svg>
          </a>

          {/* Email */}
          <a
            href="mailto:pushpendrarajput232@gmail.com"
            aria-label="Email"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="hero-social-icon"
            >
              <path
                fill="currentColor"
                d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4.24-8 5-8-5V6l8 5 8-5v2.24Z"
              />
            </svg>
          </a>

        </div>

      </div>

      {/* Profile Image */}
      <div className="hero-profile">

        <img
          src="/images/profile.jpeg"
          alt="Pushpendra Rajput"
          className="hero-profile-image"
        />

      </div>

    </section>
  );
}

export default Hero;