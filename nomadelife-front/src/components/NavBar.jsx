import React from 'react'
import styles from './NavBar.module.css'
const NavBar = () => {
    return (
        <>
        <nav className={styles.navbar}>
            <div className={styles.brand}>
                Nomade<span>DEV</span>
            </div>
            <ul className={styles.links_list}>
                <li>
                    <a href="#">Home</a><a/>
                </li>
                <li>
                <a href="#">Login</a><a/>
                </li>
                <li>
                <a href="#"></a>Register<a/>
                </li>
                <li>
                <a href="#"></a>New Post<a/>
                </li>
                <li>
                <a href="#"></a>DashBoard<a/>
                </li>
                <li>
                <a href="#">About Us</a><a/>
                </li>
                <li>
                <a href="#">Exit</a><a/>
                </li>
            </ul>
        </nav>
        </>
    )
}

export default NavBar