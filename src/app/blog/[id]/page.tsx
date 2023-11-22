import styles from './page.module.scss';
import Image from "next/image";
import {Metadata} from "next";

async function getData(id: string) {
    const res = await fetch(`https://next-app-p2go.vercel.app/posts/${id}`, {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
}

type Props = {
    params: {
        id: string;
    };
}

export async function generateMetadata({ params: {id} }: Props ): Promise<Metadata>{
    const data = await getData(id);
    return {
        title: data.title,
        description: data.description,
    };
}


const BlogId = async ({ params: {id} }: Props ) => {
    const data = await getData(id);

    return (
        <section className="blog__container">
            <div className={styles.top}>
                <div className={styles.info}>
                    <h1 className={styles.title}>{data.title}</h1>
                    <p className={styles.desc}>{data.description}</p>
                    <div className={styles.author}>
                        <Image
                            src={data.image}
                            alt={data.title}
                            width={40}
                            height={40}
                            className={styles.avatar}
                        />
                        <span className={styles.username}>{data.userName}</span>
                    </div>
                </div>
                <div className={styles.imageCont}>
                    <Image
                        src={data.image}
                        alt={data.title}
                        fill={true}
                        className={styles.image}
                    />
                </div>
            </div>
            <div className={styles.content}>
                <p className={styles.text}>{data.content}</p>
            </div>
        </section>
    )
}

export default BlogId