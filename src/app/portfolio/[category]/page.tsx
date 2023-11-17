import styles from './page.module.scss';
import Button from "@/component/Button/Button";
import Image from "next/image";

const Category = ({params}: any) => {
    return (
        <section className="category__container">
            <div className="category__content">
                <h1 className={styles.catTitle}>{params.category}</h1>
                <div className={styles.item} key={1}>
                    <div className={styles.content}>
                        <h1 className={styles.title}>test</h1>
                        <p className={styles.desc}>desc</p>
                        <Button text="See More" url="#" />
                    </div>
                    <div className={styles.imgContent}>
                        <Image
                            src="https://img.freepik.com/free-photo/robot-handshake-human-background-futuristic-digital-age_53876-129770.jpg?w=1380&t=st=1686056951~exp=1686057551~hmac=5da557bfff0192720a1dfa7608b353322afcbfc038886c891ba296fd8fa7e97b"
                            className={styles.img}
                            fill={true}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Category;