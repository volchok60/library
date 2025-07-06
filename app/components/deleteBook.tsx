'use client'

import { useRouter } from "next/navigation";
import { deleteBook } from '../lib/api';

export default function DeleteBook(props: {id: number}) {

    const id = props.id;
    const router = useRouter();

    async function deleteDialog() {
        const conf = confirm("Delete Book?");
        if (conf) {
            const book = await deleteBook(id);
            console.log('deleted book with ID: ' + book.id);
            router.push('/books');
            router.refresh();
        }
    }
    
    return (
        <button onClick={deleteDialog} className='rounded-md bg-cyan-500 text-white hover:bg-blue-500 m-2 px-2'>Delete</button>
    );
}