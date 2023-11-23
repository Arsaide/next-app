'use client'
import styles from './TheHeader.module.scss';
import Link from "next/link";
import DarkModeToggle from "@/component/DarkModeToggle/DarkModeToggle";
import {signOut, useSession} from "next-auth/react";

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
        title: 'Login',
        url: '/dashboard/login'
    },
]

const handleLogoutClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    signOut();
}

const TheHeader = () => {
    const session = useSession();

    const updatedLinks = [...links];

    if (session?.status === 'authenticated') {
        const indexToRemove = updatedLinks.findIndex(link => link.id === 6);
        if (indexToRemove !== -1) {
            updatedLinks.splice(indexToRemove, 1);
        }
        updatedLinks.push({ id: 7, title: 'Dashboard', url: '/dashboard' });
    } else {
        const indexToRemove = updatedLinks.findIndex(link => link.id === 7);
        if (indexToRemove !== -1) {
            updatedLinks.splice(indexToRemove, 1);
        }
    }

    // @ts-ignore
    return (
        <header className={styles.header}>
            <div className='header__container'>
                <nav className={styles.header__menu}>
                    <Link className={styles.logo} href='/'>NextTestApp</Link>
                    <div className={styles.links}>
                        <DarkModeToggle />
                        {updatedLinks.map((link) => (
                            <Link key={link.id} href={link.url}>{link.title}</Link>
                        ))}
                        {session.status == 'authenticated' &&
                            <button className={styles.logout} onClick={handleLogoutClick}>Logout</button>}
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default TheHeader