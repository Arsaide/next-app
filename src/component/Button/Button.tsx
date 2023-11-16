import React from 'react';
import styles from './page.module.scss';
import Link from "next/link";

type Props = {
    text: string,
    url: string,
}

const Button = ({text, url}: Props) => {
    return (
        <Link href={url}>
            <button className={styles.button}>{text}</button>
        </Link>
    );
}

export default Button;