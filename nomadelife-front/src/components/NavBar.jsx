import React from 'react'
import styles from './NavBar.module.css'

const NavBar = () => {
  return (
    <>
    <nav className={styles.navbar}>
      <div className={styles.brand}>
        Nomade <span>DEV</span>
      </div>
      <ul className={styles.links_list}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Login</a>
        </li>
        <li>
          <a href="#">Register</a>
        </li>
        <li>
          <a href="#">New Post</a>
        </li>
        <li>
          <a href="#">Dashboard</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Exit</a>
        </li>
      </ul>
    </nav>
    </>
  )
}

export default NavBar