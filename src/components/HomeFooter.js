import React from 'react'
import styles from '../styles/HomeFooter.module.css'

export default function HomeFooter() {
    return (
        <div className={styles.footer}>
            <div id={styles.footer1}>
                <h3>Rapid Innovation</h3>
                <p>Modern Web3 Solutions that Enhance Humanity.</p>
            </div>

            <div id={styles.footer2}>
                <h3>Locations</h3>
                <ul>
                    <li>USA, Idahop <p>2785 W Seltice Way Post Fall, ID 83854</p></li>
                    <li>India, Noida <p>Tower 1, Okaya Blue Silicon Business Park Sector - 62, Noida, UP 201301</p></li>
                </ul>
            </div>
        </div>
    )
}
