import { useState, useEffect } from 'react'
import { booksCount, copiesCount, availableCopiesCount, authorsCount, genresCount } from '../lib/api'

export default function Home() {
  const [counts, setCounts] = useState({
    books: -1,
    copies: -1,
    availableCopies: -1,
    authors: -1,
    genres: -1
  })

  useEffect(() => {
    async function fetchCounts() {
      try {
        const [books, copies, availableCopies, authors, genres] = await Promise.all([
          booksCount(),
          copiesCount(),
          availableCopiesCount(),
          authorsCount(),
          genresCount()
        ])
        
        setCounts({
          books: parseInt(books || '0'),
          copies: parseInt(copies || '0'),
          availableCopies: parseInt(availableCopies || '0'),
          authors: parseInt(authors || '0'),
          genres: parseInt(genres || '0')
        })
      } catch (error) {
        console.error('Failed to fetch counts:', error)
      }
    }

    fetchCounts()
  }, [])
  
  return (
    <div className="grid justify-items-center">
      <h1 className='text-3xl font-bold text-green-500'>Local Library</h1>
      <p>The Library has the following record counts:</p>
      <ul>
        <li><strong>Books: </strong>{counts.books}</li>
        <li><strong>Book Copies: </strong>{counts.copies}</li>
        <li><strong>Available Book Copies: </strong>{counts.availableCopies}</li>
        <li><strong>Authors: </strong>{counts.authors}</li>
        <li><strong>Genres: </strong>{counts.genres}</li>
      </ul>
    </div>
  )
}