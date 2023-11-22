'use client';
import styles from './page.module.scss';
import {useState, useEffect} from "react";
import useSWR from "swr";

export default function Dashboard() {
    // const [data, setData] = useState([]);
    // const [error, setError] = useState(false);
    // const [isLoading, setIsLoading] = useState(true)
    //
    // useEffect(() => {
    //     const getData = async () => {
    //         const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
    //             cache: 'no-store'
    //         })
    //
    //         if (!res.ok) {
    //             setError(true);
    //         }
    //
    //         const data = await res.json()
    //
    //         setData(data)
    //         setIsLoading(false)
    //     }
    //
    //     getData()
    // }, []);
    //
    // console.log(data)

    const fetcher = (...args: Parameters<typeof fetch>) => fetch(...args).then(res => res.json());
    const { data, error, isLoading } = useSWR(
        'https://jsonplaceholder.typicode.com/posts',
        fetcher
    );

    console.log(data)

    return (
        <section className="dashboard__container">
            Dashboard
        </section>
    )
}