import Image from "next/image";
import styles from './page.module.scss';
import Button from "@/component/Button/Button";
import Hero from 'public/hero.png';

export default function Home() {
    return (
        <>
            <section className="main__container">
                <div className={styles.main__content}>
                    <div className={styles.main__text_content}>
                        <h3 className={styles.main__title}>
                            The Future of AI in the next few years
                        </h3>
                        <p className={styles.main__desc}>
                            Turning your Idea into Reality. We bring together the teams from the global tech industry.
                        </p>
                        <Button url="portfolio" text="See Our Works"/>
                    </div>
                    <div className={styles.main__item}>
                        <Image src={Hero} alt='main photo' className={styles.main__img}/>
                    </div>
                </div>
            </section>
        </>
    )
}
