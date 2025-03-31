"use client";
import styles from "../styles/page.module.css";
import lua from "../public/lua.gif"
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        router.push("/");
    }, [router]);

    return (
        <main className={styles.redirector}>
            <div className={styles.text}>
                <p className={styles.description}>Você está sendo redirecionado...</p>
            </div>
            <div>
                <Image
                    className={styles.gif}
                    src={lua}
                    alt="Prateleiras se movendo"
                />
            </div>
        </main>
    );
}
