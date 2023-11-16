import styles from './page.module.scss';


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="footer__container">
                <span>2023 My App. My practice with TS, Next.JS, React</span>
            </div>
        </footer>
    )
}

export default Footer