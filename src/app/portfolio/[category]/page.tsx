import styles from './page.module.scss';
import Button from "@/component/Button/Button";
import Image from "next/image";
import { items } from "@/app/portfolio/[category]/data";
import {notFound} from "next/navigation";

interface Items {
    [key: string]: typeof items;
    [key: number]: typeof items;
}

const getData = (cat: string | number) => {
    // @ts-ignore
    const data = items[cat];

    if (data) {
        return data;
    } else {
        return notFound();
    }
};

const Category = ({params}: any) => {
    const data = getData(params.category);

    return (
        <section className="category__container">
            <div className="category__content">
                <h1 className={styles.catTitle}>{params.category}</h1>

                {data.map((item: { id: number; title: string; desc: string; image: string }) => (
                    <div className={styles.item} key={item.id}>
                        <div className={styles.content}>
                            <h1 className={styles.title}>{item.title}</h1>
                            <p className={styles.desc}>{item.desc}</p>
                            <Button text="See More" url="#" />
                        </div>
                        <div className={styles.imgContent}>
                            <Image
                                src={item.image}
                                className={styles.img}
                                fill={true}
                                alt={item.title}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Category;