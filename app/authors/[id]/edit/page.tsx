import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { getAuthor } from "@/app/lib/api"

export default async function UpdateAuthorForm({params}: {params: {id: number}}) {

  const id = params.id
  const author = await getAuthor(id)
  console.log('author:', author)

  const birthDate = author.birthDate.split('T')[0]
  const deathDate = author.deathDate?.split('T')[0]

  async function updateAuthor(formData: FormData) {
    'use server'

    const baseUrl = process.env.BASE_URL

    const birthDate = new Date(formData.get('birth_date') as string)
    const str = formData.get('death_date') as string // can be ''
    const deathDate = str ? new Date(str) : null

    const payload = {
      firstName: formData.get('first_name'),
      familyName: formData.get('family_name'),
      birthDate: birthDate,
      deathDate: deathDate,
      lifeSpan: formData.get('life_span')
    }
    console.log('payload:', payload)

    const resp = await fetch(`${baseUrl}/authors/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    })

    if (!resp.ok) {
      console.error('status:', resp.status, 'statusText:', resp.statusText)
      throw new Error('Failed to update Author')
    }
    const author = await resp.json()
    console.log('updated author:', author)

    revalidatePath('/authors')
    redirect('/authors')
  }
  
  return (
    <div>
      <h1 className='text-center m-2'>Update Author</h1>
      <form action={updateAuthor}>
        <div className="grid grid-cols-2 gap-3">
          <label className='sm:text-end'>First Name:</label>
          <input type="text" name="first_name" required defaultValue={author.firstName} />
          
          <label className='sm:text-end'>Family Name:</label>
          <input type="text" name="family_name" required defaultValue={author.familyName} />
          
          <label className='sm:text-end'>Birth Date:</label>
          <input type="date" name="birth_date" required defaultValue={birthDate} />
          
          <label className='sm:text-end'>Death Date:</label>
          <input type="date" name="death_date" defaultValue={deathDate} />
          
          <label className='sm:text-end'>Life Span:</label>
          <textarea name='life_span' rows={20} cols={50} required defaultValue={author.lifeSpan} />
        </div>
        <div className='text-center'>
          <button type="submit" className='rounded-md bg-cyan-500 text-white hover:bg-blue-500 m-2 px-2'>
            Update
          </button>
        </div>
      </form>
    </div>
  )
}