import React from 'react'
import styles from '../styles/HomeBody.module.css'
import { useSelector } from 'react-redux'

export default function HomeBody() { 
  const theme = useSelector((state) => state.theme.theme)

  return (
    <div className={styles.homeBody} style={{ background: theme === 'light' ? 'white' : '#30034a', color: theme==='light' ? 'black':'white'}}>
      <div id={styles.homeBody_1}>
        <h3>Local Business</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
      </div>
      <div id={styles.homeBody_2}>
        <h3>Online Store</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
      </div>
      <div id={styles.homeBody_3}>
        <h3>Blogging</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
      </div>
      <div id={styles.homeBody_4}>
        <h3>Portfolio</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
      </div>
    </div>
  )
}
