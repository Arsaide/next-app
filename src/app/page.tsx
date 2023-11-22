import Image from "next/image";
import styles from './page.module.scss';
import Button from "@/component/Button/Button";
import Hero from 'public/5.png';

export default function Home() {
    return (
        <>
            <section className="main__container">
                <div className={styles.main__content}>
                    <div className={styles.main__text_content}>
                        <h3 className={styles.main__title}>
                            Lorem ipsum dolor sit amet. Aenean turpis urna
                        </h3>
                        <p className={styles.main__desc}>
                            Donec lectus lorem, rutrum eu accumsan sit amet, auctor vel lorem. Donec vitae sodales elit.
                            Curabitur eu fringilla arcu, et interdum magna. Mauris mauris lectus, porttitor vitae felis
                            at.
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
