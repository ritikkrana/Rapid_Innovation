import React from 'react';
import styles from '../styles/HomeHeader.module.css';
import images from '../media/image1.png';

export default function HomeHeader() {
  return (
    <div id={styles.header}>
      <div id={styles.header1}>
        <h1>AI Automation & Blockchain Solutions In 90 Days</h1>
        <p>We have a top-tier team of experts that offers premier AI, Blockchain consulting and Web3 development services.</p>
      </div>
      <div id={styles.image1}>
        <div>
          <img src={images} alt="for development" />
        </div>
      </div>
    </div>
  )
}
