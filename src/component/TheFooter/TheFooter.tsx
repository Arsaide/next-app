'use client'
import styles from './TheFooter.module.scss';
import Image from "next/image";
import React from 'react';

const social = [
    {
        src: '/inst.png',
        alt: 'instagram.com',
        id: '1',
    },
    {
        src: '/twitter.png',
        alt: 'twitter.com',
        id: '2',
    },
    {
        src: '/yt.png',
        alt: 'youtube.com',
        id: '3',
    },
]

const TheFooter = () => {
    return (
        <>
            <footer className={styles.footer}>
                <section className="footer__container">
                    <div className={styles.footer__content}>
                        <span>The App. Practice with Next JS, React</span>
                        <div className={styles.footer__social}>
                            {social.map((img) => (
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    key={img.id}
                                    width={25} height={25} className={styles.footer__icon}/>
                            ))}
                        </div>
                    </div>
                </section>
            </footer>
        </>
    )
}

export default TheFooter