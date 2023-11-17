import styles from './page.module.scss';
import Link from "next/link";
import Image from "next/image";


export default function Blog() {
    return (
        <section className="blog__container">
            <Link href='blog/test' className={styles.cont} key={1}>
                <div className={styles.imageContainer}>
                    <Image
                        src='https://img.freepik.com/free-vector/illustration-of-gallery-icon_53876-27002.jpg?w=826&t=st=1700256486~exp=1700257086~hmac=d739b1599c4eb6ef0a5e685002d35539bf16bcb929b9e0ab617c0a9dd008841a'
                        alt='img'
                        width={400}
                        height={250}
                        className={styles.image}
                    />
                </div>
                <div className={styles.content}>
                    <h2 className={styles.title}>Title</h2>
                    <p className={styles.desc}>Desc</p>
                </div>
            </Link>
            <Link href='blog/test2' className={styles.cont} key={1}>
                <div className={styles.imageContainer}>
                    <Image
                        src='https://img.freepik.com/free-vector/illustration-of-gallery-icon_53876-27002.jpg?w=826&t=st=1700256486~exp=1700257086~hmac=d739b1599c4eb6ef0a5e685002d35539bf16bcb929b9e0ab617c0a9dd008841a'
                        alt='img'
                        width={400}
                        height={250}
                        className={styles.image}
                    />
                </div>
                <div className={styles.content}>
                    <h2 className={styles.title}>Title</h2>
                    <p className={styles.desc}>Desc</p>
                </div>
            </Link>
        </section>
    )
}