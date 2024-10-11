// src/pages/About.js
import React from 'react';

const About = () => {
  return (
    <div style={styles.container}>
      <h1>About This App</h1>
      <p>This app is a simple example of a single-page application (SPA) built with React.</p>
      <p>Here are some features:</p>
      <ul>
        <li>Easy navigation between pages</li>
        <li>User-friendly interface</li>
        <li>State management for dynamic content</li>
      </ul>
      <p>We hope you enjoy using this app!</p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#e6f7ff',
  },
};

export default About;
