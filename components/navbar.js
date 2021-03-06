import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

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

    const ClearActive = () => {
        const elements = document.getElementsByClassName(styles.active);
        Array.from(elements).forEach(ele => ele.classList.remove(styles.active));
    }

    const SelectNavItem = e => {
        CloseMenu();
        ClearActive();
        e.target.classList.add(styles.active);
    }

     return (
         <header>
            <nav className={`${styles.navbar} ${styles.fixedHeader}`}>
                <div className='mx-auto md:mx-0'>
                <Link href='/'>
                    <a onClick={ClearActive}><Image src='/images/logo_inverted.png' alt='logo' width={120} height={50} /></a>
                </Link>
                </div>
                <ul className={!isOpen ? styles.navmenu : styles.navmenu + ' ' + styles.active}>
                    <li className={styles.navitem}>
                        <Link href='/about'><a className={styles.navlink} onClick={e => SelectNavItem(e)}>About</a></Link>
                    </li>
                    <li className={styles.navitem}>
                        <Link href='/projects'><a className={styles.navlink} onClick={e => SelectNavItem(e)}>Projects</a></Link>
                    </li>
                    <li className={styles.navitem}>
                        <Link href='/contact'><a className={styles.navlink} onClick={e => SelectNavItem(e)}>Contact</a></Link>
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