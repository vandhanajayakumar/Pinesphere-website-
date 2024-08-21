import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div style={styles.container}>
      <h1>Welcome to Our Application</h1>
      <p>Please choose an option below:</p>
      <div style={styles.linksContainer}>
        <Link to="/form" style={styles.link}>Internship Application Form</Link>
        <Link to="/job-application" style={styles.link}>Job Application Form</Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '2rem',
    fontFamily: 'Arial, sans-serif',
  },
  linksContainer: {
    marginTop: '1.5rem',
  },
  link: {
    display: 'block',
    margin: '0.5rem 0',
    padding: '0.75rem 1rem',
    backgroundColor: '#007bff',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '4px',
    transition: 'background-color 0.3s ease',
  },
};

export default HomePage;
