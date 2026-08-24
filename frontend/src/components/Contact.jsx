import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setStatus("");

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setStatus("Message sent successfully! Thank you for contacting me.");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section" id="contact">

      <div className="contact-container">

        {/* =========================
            CONTACT HEADING
        ========================= */}
        <div className="contact-heading">

          <p className="section-subtitle">
            GET IN TOUCH
          </p>

          <h2>
            Contact Me
          </h2>

          <p>
            I'm always open to discussing new opportunities, projects,
            internships, and collaborations.
          </p>

        </div>


        {/* =========================
            CONTACT CONTENT
        ========================= */}
        <div className="contact-content">


          {/* =========================
              CONTACT INFORMATION
          ========================= */}
          <div className="contact-info">


            {/* EMAIL */}
            <div className="contact-item">

              <div className="contact-icon">

                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4.24-8 5-8-5V6l8 5 8-5v2.24Z"
                  />
                </svg>

              </div>

              <div>
                <h3>Email</h3>

                <a href="mailto:pushpendrarajput232@gmail.com">
                  pushpendrarajput232@gmail.com
                </a>
              </div>

            </div>


            {/* LINKEDIN */}
            <div className="contact-item">

              <div className="contact-icon">

                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.3ZM5.32 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.54 20.45H7.1V8.99H3.54v11.46H3.54ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z"
                  />
                </svg>

              </div>

              <div>
                <h3>LinkedIn</h3>

                <a
                  href="https://www.linkedin.com/in/pushpendra-rajput-219885429/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn Profile
                </a>
              </div>

            </div>


            {/* GITHUB */}
            <div className="contact-item">

              <div className="contact-icon">

                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.15c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.24 3.32.95.1-.74.4-1.24.73-1.52-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18A10.9 10.9 0 0 1 12 8.27c.97 0 1.94.13 2.85.38 2.18-1.49 3.14-1.18 3.14-1.18.63 1.59.24 2.77.12 3.06.73.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.41.35.78 1.04.78 2.1v3.11c0 .3.2.66.79.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
                  />
                </svg>

              </div>

              <div>
                <h3>GitHub</h3>

                <a
                  href="https://github.com/pushpendrarajput232-hub?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Profile
                </a>
              </div>

            </div>

          </div>


          {/* =========================
              CONTACT FORM
          ========================= */}
          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            {/* NAME */}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />


            {/* EMAIL */}
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />


            {/* SUBJECT */}
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />


            {/* MESSAGE */}
            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>


            {/* BUTTON */}
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>


            {/* STATUS MESSAGE */}
            {status && (
              <p className="contact-status">
                {status}
              </p>
            )}

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;