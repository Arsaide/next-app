'use client';
import styles from './page.module.scss';
import useSWR from "swr";
import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";
import Image from "next/image";

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

    const session = useSession()
    const router = useRouter();

    const fetcher = (...args: Parameters<typeof fetch>) => fetch(...args).then(res => res.json());
    const { data, error, isLoading } = useSWR(
        'https://jsonplaceholder.typicode.com/posts',
        fetcher
    );


    if (session.status == 'loading') {
        return <p>Loading...</p>
    }
    if (session.status == 'unauthenticated') {
        router?.push("/dashboard/login")
    }

    return (
        <section className={styles.dashboard__container}>
            <Image src='/mala-zarplata-kulera.jpg' alt='SOS' width={400} height={300}/>
            <Image src='/nikitalol.jpg' alt='SOS' width={400} height={300}/>
            <Image src='/images.jpg' alt='SOS' width={400} height={300}/>
        </section>
    )
}