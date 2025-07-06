'use client'

import { useRouter } from "next/navigation";
import { login } from "../lib/api";
import { FormEvent, useState } from "react";

export default function LoginForm() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const router = useRouter();

    async function handleLogin(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const user = await login(username, password);
        console.log('username: ' + user.username); //TODO display username & Login -> Logout
        localStorage.setItem("username", user.username);
            
        router.push('/');
        router.refresh();
    }

    return (
        <div>
            <h1 className='text-center m-2'>Login Form</h1>
            <form onSubmit={handleLogin}>
                <div className="grid grid-cols-2 gap-3">
                    <label className='sm:text-end'>Username:</label>
                    <input type="text" required value={username} onChange={e => setUsername(e.target.value)} />
                    
                    <label className='sm:text-end'>Password:</label>
                    <input type="password" required value={password} onChange={e => setPassword(e.target.value)}/>
                </div>
                <div className='text-center'>
                    <input type="submit" value="Login" className='rounded-md bg-cyan-500 text-white hover:bg-blue-500 m-2 px-2' />
                </div>
            </form>
        </div>
    );
}