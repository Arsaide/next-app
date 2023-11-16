'use client'
import styles from './page.module.scss';
import Link from "next/link";

const links = [
    {
        id: 1,
        title: 'Home',
        url: '/',
    },
    {
        id: 2,
        title: 'Porfolio',
        url: '/portfolio',
    },
    {
        id: 3,
        title: 'Blog',
        url: '/blog',
    },
    {
        id: 4,
        title: 'About',
        url: '/about',
    },
    {
        id: 5,
        title: 'Contact',
        url: '/contact',
    },
    {
        id: 6,
        title: 'Dashboard',
        url: '/dashboard',
    },
]

const TheHeader = () => {
    return (
        <header className={styles.header}>
            <div className='header__container'>
                <nav className={styles.header__menu}>
                    <Link className={styles.logo} href='/'>MyApp</Link>
                    <div className={styles.links}>
                        {links.map((link) => (
                            <Link key={link.id} href={link.url}>{link.title}</Link>
                        ))}
                        <button className={styles.logout} onClick={() => {console.log('Logout')}}>Logout</button>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default TheHeader