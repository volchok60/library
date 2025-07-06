'use client'

import { useRouter } from "next/navigation";
import { deleteAuthor } from '../lib/api';

export default function DeleteAuthor(props: {id: number}) {

    const id = props.id;
    const router = useRouter();

    async function deleteDialog() {
        const conf = confirm("Delete Author?");
        if (conf) {
            const author = await deleteAuthor(id);
            console.log('deleted author with ID: ' + author.id);
            router.push('/authors');
            router.refresh();
        }
    }
    
    return (
        <button onClick={deleteDialog} className='rounded-md bg-cyan-500 text-white hover:bg-blue-500 m-2 px-2'>Delete</button>
    );
}