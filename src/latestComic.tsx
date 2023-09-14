import { useEffect, useState } from 'react'
import { XKCDComic } from './types'
import { Error } from './error'
import { Container } from './container'

/**
 * Loading in one component
 *
 * Violates the Single Responsibility Principle
 */
export const LatestComic = () => {
  const [comic, setComic] = useState<XKCDComic>()
  const [error, setError] = useState<string | undefined>()

  useEffect(() => {
    fetch('http://localhost:3000/')
      .then(response => response.json())
      .then(x => {console.log(x); return x})
      .then(setComic as any)
      .catch(e => setError(e.message))
  }, [setComic])

  return (
    <Container>
      <h1>XKCD</h1>
      {comic &&
        <div>
          <h2>{comic.title}</h2>
          <img src={comic.img} alt={comic.alt} />
        </div>
      }
      {error && <Error message={JSON.stringify(error)} /> }
    </Container>

  )
}