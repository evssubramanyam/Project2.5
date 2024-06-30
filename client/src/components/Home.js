// src/Home.js
import React from 'react';

const Home = () => {
  return (
    <div>
      <header style={styles.header}>
        <h1>Finance Website</h1>
        <nav>
          <ul style={styles.navList}>
            <li style={styles.navItem}><a href="#home" style={styles.navLink}>Home</a></li>
            <li style={styles.navItem}><a href="#about" style={styles.navLink}>About</a></li>
            <li style={styles.navItem}><a href="#services" style={styles.navLink}>Services</a></li>
            <li style={styles.navItem}><a href="#contact" style={styles.navLink}>Contact</a></li>
          </ul>
        </nav>
      </header>
      <main style={styles.main}>
        <section id="market-trends" style={styles.section}>
          <h2>Market Trends</h2>
          <p>Stay updated with the latest market trends and stock prices.</p>
          {/* Example content, replace with actual data fetching and display */}
        </section>
        <section id="latest-news" style={styles.section}>
          <h2>Latest News</h2>
          <p>Get the latest financial news and updates.</p>
          {/* Example content, replace with actual news fetching and display */}
        </section>
        <section id="investment-tips" style={styles.section}>
          <h2>Investment Tips</h2>
          <p>Learn investment strategies from the experts.</p>
          {/* Example content, replace with actual tips fetching and display */}
        </section>
      </main>
      <footer style={styles.footer}>
        <p>&copy; 2024 Finance Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

const styles = {
  header: {
    backgroundColor: '#282c34',
    padding: '20px',
    color: 'white',
    textAlign: 'center',
  },
  navList: {
    listStyleType: 'none',
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
  },
  navItem: {
    margin: '0 10px',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
  },
  main: {
    padding: '20px',
  },
  section: {
    marginBottom: '20px',
  },
  footer: {
    backgroundColor: '#282c34',
    color: 'white',
    padding: '10px',
    textAlign: 'center',
    position: 'fixed',
    width: '100%',
    bottom: 0,
  },
};

export default Home;