import React, {useContext} from 'react';
import styles from './DarkModeToggle.module.scss'
import {ThemeContext} from "@/context/ThemeContext";

const DarkModeToggle = () => {
    const {toggle, mode} = useContext(ThemeContext)
    return (
        <span className={styles.content} onClick={toggle}>
            <span className={styles.icon}>🌙</span>
            <span className={styles.icon}>☀️</span>
            <span className={styles.ball} style={mode === 'light' ? {left: '2px'} : {right: '2px'}}></span>
        </span>
    );
};

export default DarkModeToggle;
