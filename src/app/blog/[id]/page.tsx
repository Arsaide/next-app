import styles from './page.module.scss';
import Image from "next/image";

const BlogId = () => {
    return (
        <section className="blog__container">
            <div className={styles.top}>
                <div className={styles.info}>
                    <h1 className={styles.title}>Title</h1>
                    <p className={styles.desc}>Desc</p>
                    <div className={styles.author}>
                        <Image
                            src=""
                            alt=""
                            width={40}
                            height={40}
                            className={styles.avatar}
                        />
                        <span className={styles.username}>username</span>
                    </div>
                </div>
                <div className={styles.imageCont}>
                    <Image
                        src=""
                        alt=""
                        fill={true}
                        className={styles.image}
                    />
                </div>
            </div>
            <div className={styles.content}>
                <p className={styles.text}>desc</p>
            </div>
        </section>
    )
}

export default BlogId