import styles from './page.module.scss';
import Link from "next/link";
import Image from "next/image";

async function getData() {
    const res = await fetch('http://localhost:3000/api/posts', { cache: 'no-store' });

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()

}

interface Props {
    _id: number,
    title: string,
    description: string,
    image: string,
}

export default async function Blog() {
    const data = await getData()

    return (
        <section className="blog__container">
            <div className={styles.blog__content}>
                {data.map((item: Props) => (
                    <Link
                        href={`/blog/${item._id}`}
                        className={styles.cont}
                        key={item._id}>
                        <div className={styles.imageContainer}>
                            <Image
                                src={item.image}
                                alt='img'
                                width={400}
                                height={250}
                                className={styles.image}
                            />
                        </div>
                        <div className={styles.content}>
                            <h2 className={styles.title}>{item.title}</h2>
                            <p className={styles.desc}>{item.description}</p>
                        </div>
                    </Link>
                ))}

            </div>
        </section>
    )
}