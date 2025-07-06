import Link from "next/link"
import { getBook } from "@/app/lib/api"
import DeleteBook from "@/app/components/deleteBook"

export default async function BookDetails({params}: {params: {id: number}}) {
  const id = params.id
  const book = await getBook(id)
  const author = book.author

  return (
    <>
      <h1 className='text-center m-2'>Book Details</h1>
      <p className="mb-2">
        <span className="underline">
          {book.title}
        </span>
        <span> by </span>
        {author.firstName}{' '}{author.familyName}
      </p>
      <p>
        {book.summary}
      </p>  
      <div className='text-center'>
        <Link href={`/books/${id}/edit`} className='rounded-md bg-cyan-500 text-white hover:bg-blue-500 m-2 px-2'>Edit</Link>
        <DeleteBook id={id} />
      </div>
    </>
  )
}