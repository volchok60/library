import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getGenres } from '../lib/api'
import { GenreType } from '../components/Genre'

export default function Genres() {
  const [genres, setGenres] = useState<GenreType[]>([])

  useEffect(() => {
    async function fetchGenres() {
      try {
        const data = await getGenres()
        setGenres(data)
      } catch (error) {
        console.error('Failed to fetch genres:', error)
      }
    }

    fetchGenres()
  }, [])

  return (
    <>
      <div className="flex justify-between pt-2">
        <h1 className="ml-2">Genre List</h1>
        <Link to='/genres/create' className="rounded-md bg-cyan-500 text-white hover:bg-blue-500 mr-2 p-2">New Genre</Link>
      </div>
      <div className="grid justify-items-center">
        <ul>
          {genres && genres.map((genre: GenreType) => (
            <li key={genre.id}>
              <Link to={`/genres/${genre.id}`} className="hover:text-blue-500">{genre.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}