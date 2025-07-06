'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginFlip() {
    const router = useRouter();
    function handleLogout() {
        localStorage.removeItem("username");
        router.push('/');
        router.refresh();
    }
    const username = localStorage.getItem("username");
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