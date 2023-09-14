import { useEffect, useState } from 'react'
import { XKCDComic } from './types'
import { Error } from './error'
import { Loading } from './loading'
import { Container } from './container'

interface LatestComicDisplayProps {
  comic: XKCDComic
}

/**
 * Extract the loader: presentation vs. container components
 *
 * https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0
 *
 * The display doesn't know anything about the loader
 */
export const LatestComicDisplay = ({comic}: LatestComicDisplayProps) => {
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

export const LatestComic2 = () => {
  const [comic, setComic] = useState<XKCDComic>()
  const [error, setError] = useState<string | undefined>()

  useEffect(() => {
    fetch('http://localhost:3000/')
      .then(response => response.json())
      .then(x => {console.log(x); return x})
      .then(setComic as any)
      .catch(e => setError(e.message))
  }, [setComic])

  if (error) {
    return (<Error message={JSON.stringify(error)}  />)
  }

  if (comic) {
    return <LatestComicDisplay comic={comic}></LatestComicDisplay>
  } else {
    return <Loading />
  }
}

