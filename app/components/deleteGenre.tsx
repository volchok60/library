'use client'

import { useRouter } from "next/navigation";
import { deleteGenre } from '../lib/api';

export default function DeleteGenre(props: {id: number}) {

    const id = props.id;
    const router = useRouter();

    async function deleteDialog() {
        const conf = confirm("Delete Author?");
        if (conf) {
            const genre = await deleteGenre(id);
            console.log('deleted genre with ID: ' + genre.id);
            router.push('/genres');
            router.refresh();
        }
    }
    
    return (
        <button onClick={deleteDialog} className='rounded-md bg-cyan-500 text-white hover:bg-blue-500 m-2 px-2'>Delete</button>
    );
}