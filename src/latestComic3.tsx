import { useEffect, useState } from 'react'
import { XKCDComic } from './types'
import { Error } from './error'
import { Loading } from './loading'
import { Container } from './container'

interface LatestComicDisplay {
  comic: XKCDComic
}

/**
 * refactored to a hook
 */
const useComicLoader = () => {
  const [comic, setComic] = useState<XKCDComic>()
  const [error, setError] = useState<string | undefined>()

  useEffect(() => {
    fetch('http://localhost:3000/')
      .then(response => response.json())
      .then(x => {console.log(x); return x})
      .then(setComic as any)
      .catch(e => setError(e.message))
  }, [setComic])

  return {comic, error}
}

export const LatestComicDisplay3 = ({comic}: LatestComicDisplay) => {
  return (
    <Container>
      <h1>XKCD</h1>
      <div>
        <h2>{comic.title}</h2>
        <img src={comic.img} alt={comic.alt} />
      </div>
    </Container>
  )
}

export const LatestComic3 = () => {
  const { comic, error } = useComicLoader()

  if (error) {
    return (<Error message={JSON.stringify(error)}  />)
  }

  if (comic) {
    return <LatestComicDisplay3 comic={comic}></LatestComicDisplay3>
  } else {
    return <Loading />
  }
}

