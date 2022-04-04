import Link from "next/link"
import { useState } from "react"

import styles from '../styles/Navbar.module.css'

const Navbar = () => {
    const [ isOpen, setIsOpen ] = useState(false);

    const OpenMenu = () => {
        setIsOpen(!isOpen);
    }

    const CloseMenu = () => {
        if (isOpen) {
            setIsOpen(false);
        }      
    }

     return (
         <header className={styles.header}>
            <nav className={styles.navbar}>
                <div className={styles.navlogo}>HUY TRAN</div>
                <ul className={!isOpen ? styles.navmenu : styles.navmenu + ' ' + styles.active}>
                    <li className={styles.navitem}>
                        <Link href='/'><a className={styles.navlink} onClick={CloseMenu}>Home</a></Link>
                    </li>
                    <li className={styles.navitem}>
                        <Link href='/about'><a className={styles.navlink} onClick={CloseMenu}>About</a></Link>
                    </li>
                    <li className={styles.navitem}>
                        <Link href='/projects'><a className={styles.navlink} onClick={CloseMenu}>Projects</a></Link>
                    </li>
                    <li className={styles.navitem}>
                        <Link href='/contact'><a className={styles.navlink} onClick={CloseMenu}>Contact</a></Link>
                    </li>
                </ul>
                <button className={!isOpen ? styles.hamburger : styles.hamburger + ' ' + styles.active} onClick={OpenMenu}>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </button>
            </nav>
         </header>
     )
}

export default Navbar