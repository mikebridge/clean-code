import { useContext, useEffect, useState } from 'react'
import { XKCDComic } from './types'
import { Error } from './error'
import { Loading } from './loading'
import { XkcdServiceContext } from './xkcdContext'
import { Container } from './container'

/**
 * Can we use dependency injection to test this?
 *
 * - We use constructor injection in Campaign Studio
 * - We could also use a Context
 */
interface LatestComicDisplay {
  comic: XKCDComic
}

const useComicLoader = () => {
  const [comic, setComic] = useState<XKCDComic>()
  const [error, setError] = useState<string | undefined>()
  const xkcdService = useContext(XkcdServiceContext);

  useEffect(() => {
    xkcdService()
      .then(setComic as any)
      .catch(e => setError(e.message))
  }, [xkcdService])

  return {comic, error}
}

export const LatestComicDisplay5 = ({comic}: LatestComicDisplay) => {
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

export const LatestComic5 = () => {
  const { comic, error } = useComicLoader()

  if (error) {
    return (<Error message={JSON.stringify(error)}  />)
  }

  if (comic) {
    return <LatestComicDisplay5 comic={comic}></LatestComicDisplay5>
  } else {
    return <Loading />
  }
}

