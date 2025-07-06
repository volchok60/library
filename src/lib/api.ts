const baseUrl = import.meta.env.VITE_BASE_URL || 'http://localhost:8000'

export async function authorsCount() {
  const resp = await fetch(`${baseUrl}/authors`, {
    method: "HEAD",
    cache: 'no-cache'
  })

  if (!resp.ok) {
    console.error('status:', resp.status, 'statusText:', resp.statusText);
    throw new Error('Failed to fetch authors count');
  }
  return resp.headers.get('x-result-count');
}

export async function booksCount() {
  const resp = await fetch(`${baseUrl}/books`, {
    method: "HEAD",
    cache: 'no-cache'
  })

  if (!resp.ok) {
    console.error('status:', resp.status, 'statusText:', resp.statusText)
    throw new Error('Failed to fetch books count')
  }
  return resp.headers.get('x-result-count')
}

export async function copiesCount() {
  const resp = await fetch(`${baseUrl}/copies`, {
    method: "HEAD",
    cache: 'no-cache'
  })

  if (!resp.ok) {
    console.error('status:', resp.status, 'statusText:', resp.statusText)
    throw new Error('Failed to fetch book copies count')
  }
  return resp.headers.get('x-result-count')
}

export async function availableCopiesCount() {
  const resp = await fetch(`${baseUrl}/copies/available`, {
    method: "HEAD",
    cache: 'no-cache'
  })

  if (!resp.ok) {
    console.error('status:', resp.status, 'statusText:', resp.statusText)
    throw new Error('Failed to fetch available book copies count')
  }
  return resp.headers.get('x-result-count')
}

export async function genresCount() {
  const resp = await fetch(`${baseUrl}/genres`, {
    method: "HEAD",
    cache: 'no-cache'
  })

  if (!resp.ok) {
    console.error('status:', resp.status, 'statusText:', resp.statusText)
    throw new Error('Failed to fetch genres count')
  }
  return resp.headers.get('x-result-count')
}

export async function getAuthors() {
  const resp = await fetch(`${baseUrl}/authors`, { cache: 'no-cache' })

  if (!resp.ok) {
    console.error('status:', resp.status, 'statusText:', resp.statusText)
    throw new Error('Failed to fetch authors')
  }

  const authors = await resp.json()
  return authors
}

export async function getGenres() {
  const resp = await fetch(`${baseUrl}/genres`, { cache: 'no-cache' })

  if (!resp.ok) {
    console.error('status:', resp.status, 'statusText:', resp.statusText)
    throw new Error('Failed to fetch genres')
  }

  const genres = await resp.json()
  return genres
}

export async function getBooks() {
  const resp = await fetch(`${baseUrl}/books`, { cache: 'no-cache' })

  if (!resp.ok) {
    console.error('status:', resp.status, 'statusText:', resp.statusText)
    throw new Error('Failed to fetch books')
  }

  const books = await resp.json()
  return books
}

export async function getBookCopies() {
  const resp = await fetch(`${baseUrl}/copies`, { cache: 'no-cache' })

  if (!resp.ok) {
    console.error('status:', resp.status, 'statusText:', resp.statusText)
    throw new Error('Failed to fetch books')
  }

  const copies = await resp.json()
  return copies
}

export async function getAuthor(id: number) {
  const resp = await fetch(`${baseUrl}/authors/${id}`, { cache: 'no-cache' })

  if (!resp.ok) {
    console.error('status:', resp.status, 'statusText:', resp.statusText)
    throw new Error('Failed to fetch Author')
  }

  const author = await resp.json()
  return author
}

export async function getBook(id: number) {
  const resp = await fetch(`${baseUrl}/books/${id}`, { cache: 'no-cache' })

  if (!resp.ok) {
    console.error('status:', resp.status, 'statusText:', resp.statusText)
    throw new Error('Failed to fetch Book')
  }

  const book = await resp.json()
  return book
}

export async function getGenre(id: number) {
  const resp = await fetch(`${baseUrl}/genres/${id}`, { cache: 'no-cache' })

  if (!resp.ok) {
    console.error('status:', resp.status, 'statusText:', resp.statusText)
    throw new Error('Failed to fetch Genre')
  }

  const genre = await resp.json()
  return genre
}

export async function getBookCopy(id: number) {
  const resp = await fetch(`${baseUrl}/copies/${id}`, { cache: 'no-cache' })

  if (!resp.ok) {
    console.error('status:', resp.status, 'statusText:', resp.statusText)
    throw new Error('Failed to fetch BookCopy')
  }

  const bookCopy = await resp.json()
  return bookCopy
}

export async function deleteAuthor(id: number) {
  const resp = await fetch(`${baseUrl}/authors/${id}`, {
    method: "DELETE"
  });

  if (!resp.ok) {
    console.error('status:', resp.status, 'statusText:', resp.statusText)
    throw new Error('Failed to delete Author')
  }
  const author = await resp.json();
  return author;
}

export async function deleteBook(id: number) {
  const resp = await fetch(`${baseUrl}/books/${id}`, {
    method: "DELETE"
  });

  if (!resp.ok) {
    console.error('status:', resp.status, 'statusText:', resp.statusText)
    throw new Error('Failed to delete Book')
  }
  const book = await resp.json();
  return book;
}

export async function deleteBookCopy(id: number) {
  const resp = await fetch(`${baseUrl}/copies/${id}`, {
    method: "DELETE"
  });

  if (!resp.ok) {
    console.error('status:', resp.status, 'statusText:', resp.statusText)
    throw new Error('Failed to delete BookCopy')
  }
  const bookCopy = await resp.json();
  return bookCopy;
}

export async function deleteGenre(id: number) {
  const resp = await fetch(`${baseUrl}/genres/${id}`, {
    method: "DELETE"
  });

  if (!resp.ok) {
    console.error('status:', resp.status, 'statusText:', resp.statusText)
    throw new Error('Failed to delete Genre')
  }
  const genre = await resp.json();
  return genre;
}

export async function login(username: string, password: string) {
  const payload = {
    username,
    password
  }

  const resp = await fetch(`${baseUrl}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  })

  if (!resp.ok) {
    console.error('status:', resp.status, 'statusText:', resp.statusText)
    throw new Error('Failed to login')
  }

  const user = await resp.json();
  return user;
}

export async function createAuthor(data: any) {
  const resp = await fetch(`${baseUrl}/authors`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })

  if (!resp.ok) {
    console.error('status:', resp.status, 'statusText:', resp.statusText)
    throw new Error('Failed to create Author')
  }
  return await resp.json()
}

export async function updateAuthor(id: number, data: any) {
  const resp = await fetch(`${baseUrl}/authors/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })

  if (!resp.ok) {
    console.error('status:', resp.status, 'statusText:', resp.statusText)
    throw new Error('Failed to update Author')
  }
  return await resp.json()
}

export async function createBook(data: any) {
  const resp = await fetch(`${baseUrl}/books`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })

  if (!resp.ok) {
    console.error('status:', resp.status, 'statusText:', resp.statusText)
    throw new Error('Failed to create Book')
  }
  return await resp.json()
}

export async function updateBook(id: number, data: any) {
  const resp = await fetch(`${baseUrl}/books/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })

  if (!resp.ok) {
    console.error('status:', resp.status, 'statusText:', resp.statusText)
    throw new Error('Failed to update Book')
  }
  return await resp.json()
}

export async function createGenre(data: any) {
  const resp = await fetch(`${baseUrl}/genres`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })

  if (!resp.ok) {
    console.error('status:', resp.status, 'statusText:', resp.statusText)
    throw new Error('Failed to create Genre')
  }
  return await resp.json()
}

export async function updateGenre(id: number, data: any) {
  const resp = await fetch(`${baseUrl}/genres/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })

  if (!resp.ok) {
    console.error('status:', resp.status, 'statusText:', resp.statusText)
    throw new Error('Failed to update Genre')
  }
  return await resp.json()
}

export async function createBookCopy(data: any) {
  const resp = await fetch(`${baseUrl}/copies`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })

  if (!resp.ok) {
    console.error('status:', resp.status, 'statusText:', resp.statusText)
    throw new Error('Failed to create BookCopy')
  }
  return await resp.json()
}

export async function updateBookCopy(id: number, data: any) {
  const resp = await fetch(`${baseUrl}/copies/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })

  if (!resp.ok) {
    console.error('status:', resp.status, 'statusText:', resp.statusText)
    throw new Error('Failed to update BookCopy')
  }
  return await resp.json()
}