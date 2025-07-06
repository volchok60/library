import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getAuthors } from '../lib/api'
import { AuthorType } from '../components/Author'

export default function Authors() {
  const [authors, setAuthors] = useState<AuthorType[]>([])

  useEffect(() => {
    async function fetchAuthors() {
      try {
        const data = await getAuthors()
        setAuthors(data)
      } catch (error) {
        console.error('Failed to fetch authors:', error)
      }
    }

    fetchAuthors()
  }, [])

  return (
    <>
      <div className="flex justify-between pt-2">
        <h1 className="ml-2">Author List</h1>
        <Link to="/authors/create" className="rounded-md bg-cyan-500 text-white hover:bg-blue-500 mr-2 p-2">New Author</Link>
      </div>
      <div className="grid justify-items-center">
        <ul>
          {authors && authors.map((author: AuthorType) => (
            <li key={author.id}>
              <Link to={`/authors/${author.id}`} className="hover:text-blue-500">
                <span>{author.first_name}{' '}{author.family_name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}