'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function LoginFlip() {
    const router = useRouter();
    const [username, setUsername] = useState<string | null>(null);

    useEffect(() => {
        setUsername(localStorage.getItem("username"));
    }, []);

    function handleLogout() {
        localStorage.removeItem("username");
        setUsername(null);
        router.push('/');
        router.refresh();
    }

    if (username) {
        return (
            <>
                <span className="px-4">{username}</span>
                <button onClick={handleLogout} className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 sm:mt-0">Logout</button>
            </>
        );
    }
    return (
        <div>
            <Link href="/login" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 sm:mt-0">Login</Link>
        </div>
    );
}