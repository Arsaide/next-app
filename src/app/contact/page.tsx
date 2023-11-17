import styles from './page.module.scss';
import Image from "next/image";
import Button from "@/component/Button/Button";

export default function Contact() {
    return (
        <section className="contact__container">
            <div className='contact__content'>
                <h1 className={styles.title}>Lets Keep in Touch</h1>
                <div className={styles.content}>
                    <div className={styles.imageContent}>
                        <Image
                            src='/contact.png'
                            alt='Contacts Image'
                            fill={true}
                                className={styles.image}
                        />
                    </div>
                    <form className={styles.form}>
                        <input type='text' placeholder='name' className={styles.input}/>
                        <input type='text' placeholder='email' className={styles.input}/>
                        <textarea
                            className={styles.textArea}
                            placeholder="message"
                            cols={30}
                            rows={10}>
                        </textarea>
                        <Button text='Send' url='#'/>
                    </form>
                </div>
            </div>
        </section>
    )
}