import React from "react";

function Contact() {
  // Inline styles
  const styles = {
    container: {
      padding: "40px",
      backgroundColor: "#f9f9f9",
      textAlign: "center",
      maxWidth: "800px",
      margin: "0 auto",
      borderRadius: "8px",
    },
    heading: {
      fontSize: "2.5rem",
      fontWeight: "bold",
      color: "#333",
      marginBottom: "20px",
    },
    description: {
      fontSize: "1.1rem",
      color: "#555",
      marginBottom: "30px",
    },
    contactInfo: {
      fontSize: "1.2rem",
      color: "#555",
      marginTop: "20px",
    },
    contactLink: {
      color: "#007bff",
      textDecoration: "none",
    },
    contactLinkHover: {
      textDecoration: "underline",
    },
  };

  // Generate random phone numbers and email addresses
  const generateRandomPhone = () => {
    const areaCode = Math.floor(Math.random() * 900) + 100;
    const phoneNumber = Math.floor(Math.random() * 9000000) + 1000000;
    return `${areaCode}-${phoneNumber}`;
  };

  const generateRandomEmail = () => {
    const domains = ["gmail.com", "yahoo.com", "outlook.com", "hotmail.com"];
    const name = Math.random().toString(36).substring(7);
    const domain = domains[Math.floor(Math.random() * domains.length)];
    return `${name}@${domain}`;
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Contact Us</h1>
      <p style={styles.description}>
        Here are some random contact details for you to reach us:
      </p>
      <div style={styles.contactInfo}>
        <p>Phone: {generateRandomPhone()}</p>
        <p>
          Email:{" "}
          <a
            href={`mailto:${generateRandomEmail()}`}
            style={styles.contactLink}
          >
            Send Email
          </a>
        </p>
      </div>
    </div>
  );
}

export default Contact;
