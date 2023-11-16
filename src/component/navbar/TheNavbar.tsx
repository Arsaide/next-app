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

const TheNavbar = () => {
    return (
        <nav>
            <Link href='/'>MyApp</Link>
            <div>
                {links.map((link) => (
                    <Link key={link.id} href={link.url}>{link.title}</Link>
                ))}
            </div>
        </nav>
    )
}

export default TheNavbar