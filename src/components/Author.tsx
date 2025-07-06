import { useState } from 'react'

export interface AuthorType {
  id: number
  firstName: string
  familyName: string
}

interface AuthorProps { 
  authors: AuthorType[]
  selectedId?: number
}

export default function Author({ authors, selectedId}: AuthorProps) {
  const [authorId, setAuthorId] = useState(selectedId)

  return (
    <>
      <label className='sm:text-end'>Author:</label>
      <select name='author_id' value={authorId} required onChange={e => setAuthorId(Number(e.target.value))}>
        <option>----- select -----</option>
        {authors && authors.map((author: AuthorType) => (
          <option key={author.id} value={author.id}>
            {author.firstName}{' '}{author.familyName}
          </option>
        ))}
      </select>
    </>
  )
}