'use client';
import styles from './page.module.scss';
import {signIn} from "next-auth/react";



const Login = () => {
    return (
        <div className="login__container">
            <button onClick={()=>signIn("google")}>Login with Google</button>
        </div>
    )
}

export default Login