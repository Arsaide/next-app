import styles from './page.module.scss';
import Link from "next/link";

const portfolio = [
    {
        href: '/portfolio/illustrations',
        title: 'Illustrations',
        id: 1,
    },
    {
        href: '/portfolio/websites',
        title: 'Websites',
        id: 2,
    },
    {
        href: '/portfolio/application',
        title: 'Application',
        id: 3,
    },
]

export default function Portfolio() {
    return (
        <section className="portfolio__container">
            <div className="portfolio__content">
                <h2 className={styles.selectTitle}>Choose a gallery</h2>
                <div className={styles.items}>
                    {portfolio.map((link) => (
                        <Link href={link.href} key={link.id} className={styles.item}>
                            <span className={styles.title}>{link.title}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}