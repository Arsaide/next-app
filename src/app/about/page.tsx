import styles from './page.module.scss';
import Image from "next/image";
import Button from "@/component/Button/Button";

export default function Page() {
    return (
        <section className="about__container">
            <div className={styles.about__content}>
                <div className={styles.about__imgContent}>
                    <Image fill={true}
                           alt="About us Image"
                           className={styles.img}
                           src="https://img.freepik.com/free-photo/paper-people-chain-on-green-grass-unity-concept_632805-35.jpg?w=1380&t=st=1685890833~exp=1685891433~hmac=46f15c2161ca525e238313ec9dc0812864411c64035b664d7abecd75e33494e1"/>
                    <div className={styles.imgText}>
                        <h2 className={styles.imgTitle}>Lorem ipsum dolor sit</h2>
                        <h3 className={styles.imgDesc}>Lorem ipsum dolor sit amet consectetrur adipisicing elit.</h3>
                    </div>
                </div>
                <div className={styles.textContainer}>
                    <div className={styles.item}>
                        <h2 className={styles.title}>Who Are We?</h2>
                        <p className={styles.desc}>
                            Curabitur ultrices nisl feugiat nunc suscipit laoreet. Vestibulum eu urna vitae tortor elementum eleifend.
                            Morbi suscipit suscipit urna eu facilisis. Morbi sit amet quam purus. Aliquam molestie, sapien nec
                            vestibulum viverra, augue ipsum convallis lacus, sed venenatis ipsum sapien in tortor. Quisque quam
                            ligula, eleifend quis pulvinar ut, dictum ac mauris. Curabitur ac purus iaculis, viverra mi vitae,
                            sollicitudin tortor. Duis eget scelerisque risus. Sed efficitur dignissim purus. Ut at dui sapien.
                            Integer ornare vitae leo non convallis. Sed fringilla orci ac elit placerat tristique.
                            <br/>
                            <br/>
                            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                            as opposed to using Content here, content here, making it look like readable English. Many
                            desktop publishing packages and web page editors now use Lorem Ipsum as their default model
                            text, and a search for lorem ipsum will uncover many web sites still in their infancy.
                            Various versions have evolved over the years, sometimes by accident, sometimes on purpose.
                        </p>
                    </div>

                    <div className={styles.item}>
                        <h2 className={styles.title}>Who Are Do?</h2>
                        <p className={styles.desc}>
                            Morbi sit amet quam purus. Aliquam molestie, sapien nec Curabitur ultrices nisl feugiat nunc suscipit laoreet.
                            Vestibulum eu urna vitae tortor elementum eleifend. Morbi suscipit suscipit urna eu facilisis.
                            vestibulum viverra, augue ipsum convallis lacus, sed venenatis ipsum sapien in tortor. Quisque quam
                            ligula, eleifend quis pulvinar ut, dictum ac mauris. Curabitur ac purus iaculis, viverra mi vitae,
                            sollicitudin tortor. Duis eget scelerisque risus. Sed efficitur dignissim purus. Ut at dui sapien.
                            Integer ornare vitae leo non convallis. Sed fringilla orci ac elit placerat tristique.
                            <br/>
                            <br/> - Dynamic WebSitres
                            <br/>
                            <br/> - Fast and Handy
                            <br/>
                            <br/> - Mobile Apps
                        </p>
                        <Button text='Contact' url='/contact'/>
                    </div>

                </div>
            </div>
        </section>
    )
}