import { booksCount, copiesCount, availableCopiesCount, authorsCount, genresCount } from "./lib/api"

export default async function Home() {

  const booksCnt = -1 //await booksCount();
  const copiesCnt = -1 // await copiesCount();
  const availableCopiesCnt = -1 // await availableCopiesCount();
  const authorsCnt = -1 // await authorsCount();
  const genresCnt = -1 // await genresCount();
  
  return (
    <div className="grid justify-items-center">
      <h1 className='text-3xl font-bold text-green-500'>Local Library</h1>
      <p>The Library has the following record counts:</p>
      <ul>
        <li><strong>Books: </strong>{booksCnt}</li>
        <li><strong>Book Copies: </strong>{copiesCnt}</li>
        <li><strong>Available Book Copies: </strong>{availableCopiesCnt}</li>
        <li><strong>Authors: </strong>{authorsCnt}</li>
        <li><strong>Genres: </strong>{genresCnt}</li>
      </ul>
    </div>
  )
}