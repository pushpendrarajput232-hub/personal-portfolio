function Certifications() {
  const certifications = [
    {
      title: "Google Cybersecurity Professional Certificate",
      issuer: "Google",
      date: "2026",
      credentialId: "ID WL6PQ011672V",
      certificateUrl: "https://www.coursera.org/account/accomplishments/specialization/WL6PQ011672V",
      credentialUrl: "https://www.coursera.org/account/accomplishments/specialization/WL6PQ011672V",
    },

    {
      title: "Introduction to Modern AI and Machine Learning",
      issuer: "CISCO",
      date: "2026",
      credentialId: "5ac19d09-5be5-499e-a621-a291b6faae61",
      certificateUrl: "https://www.credly.com/users/pushpendra-rajput.0dd244c1/edit/badges/credly/5ac19d09-5be5-499e-a621-a291b6faae61",
      credentialUrl: "https://www.credly.com/earner/earned/badge/5ac19d09-5be5-499e-a621-a291b6faae61",
    },

    {
      title: "Technology Job Simulation - Deloitte",
      issuer: "Deloitte",
      date: "2026",
      credentialId: "6a7ab694b622d831d526bba7",
      certificateUrl: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/udmxiyHeqYQLkTPvf_9PBTqmSxAf6zZTseP_6a6f6583a220bc300391c187_1786429256025_completion_certificate.pdf",
      credentialUrl: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/udmxiyHeqYQLkTPvf_9PBTqmSxAf6zZTseP_6a6f6583a220bc300391c187_1786429256025_completion_certificate.pdf",
    },

    {
      title: "Advanced Software Engineering job Simulation",
      issuer: "Walmart",
      date: "2026",
      credentialId: "6a6f66d91ebe2d46f8096753",
      certificateUrl: "https://www.theforage.com/completion-certificates/prBZoAihniNijyD6d/oX6f9BbCL9kJDJzfg_prBZoAihniNijyD6d_6a6f6583a220bc300391c187_1786422545811_completion_certificate.pdf",
      credentialUrl: "https://www.theforage.com/completion-certificates/prBZoAihniNijyD6d/oX6f9BbCL9kJDJzfg_prBZoAihniNijyD6d_6a6f6583a220bc300391c187_1786422545811_completion_certificate.pdf",
    },
  ];

  return (
    <section id="certifications" className="certifications-section">

      <div className="section-title">
        <p>My Achievements</p>
        <h2>Certifications</h2>
      </div>

      <div className="certifications-container">

        {certifications.map((certificate, index) => (

          <div className="certificate-card" key={index}>

            <h3>{certificate.title}</h3>

            <p className="certificate-issuer">
              Issued by: {certificate.issuer}
            </p>

            <p>
              Completion Date: {certificate.date}
            </p>

            <p>
              Credential ID: {certificate.credentialId}
            </p>

            <div className="certificate-buttons">

              <a
                href={certificate.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-btn"
              >
                View Certificate
              </a>

              <a
                href={certificate.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="credential-btn"
              >
                Verify Credential
              </a>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Certifications;