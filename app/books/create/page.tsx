import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { getAuthors, getGenres } from "@/app/lib/api"
import Author from "@/app/components/author"
import Genre from "@/app/components/genre"

export default async function BookForm() {

  const authors = await getAuthors()
  const genres = await getGenres()

  async function createBook(formData: FormData) {
    'use server'

    const baseUrl = process.env.BASE_URL

    const payload = {
      title: formData.get('title'), 
      authorId: parseInt(formData.get('author_id') as string),
      genreId: parseInt(formData.get('genre_id') as string),
      summary: formData.get('summary')
    }

    const resp = await fetch(`${baseUrl}/books`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    })

    if (!resp.ok) {
      console.error('status:', resp.status, 'statusText:', resp.statusText)
      throw new Error('Failed to create Book')
    }
    const book = await resp.json()
    console.log('book:', book)

    revalidatePath('/books')
    redirect('/books')
  }

  return (
    <div>
      <h1 className='text-center m-2'>New Book</h1>
      <form action={createBook}>
        <div className="grid grid-cols-2 gap-3">
          <label className='sm:text-end'>Title:</label>
          <input type="text" name="title" required />

          <Author authors={authors} />

          <Genre genres={genres} />

          <label className='sm:text-end'>Summary:</label>
          <textarea name="summary" rows={10} cols={50} required />
          
        </div>
        <div className='text-center'>
          <button type="submit" 
          className='rounded-md bg-cyan-500 text-white hover:bg-blue-500 m-2 px-2'>Create</button>
        </div>
      </form>
    </div>
  )
}