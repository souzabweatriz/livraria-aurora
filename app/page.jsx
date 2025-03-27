"use client";
import styles from "../styles/page.module.css";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        router.push("/inicio");
    }, [router]);
	
return (
	<p className={styles.text}>Redirecting …</p>
);
}

