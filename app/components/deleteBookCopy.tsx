'use client'

import { useRouter } from "next/navigation";
import { deleteBookCopy } from '../lib/api';

export default function DeleteBookCopy(props: {id: number}) {

    const id = props.id;
    const router = useRouter();

    async function deleteDialog() {
        const conf = confirm("Delete Book?");
        if (conf) {
            const bookCopy = await deleteBookCopy(id);
            console.log('deleted bookCopy with ID: ' + bookCopy.id);
            router.push('/copies');
            router.refresh();
        }
    }
    
    return (
        <button onClick={deleteDialog} className='rounded-md bg-cyan-500 text-white hover:bg-blue-500 m-2 px-2'>Delete</button>
    );
}