import { useEffect, useState } from 'react'
import { XKCDComic } from './types'
import { Error } from './error'
import { Loading } from './loading'
import { getXkcd } from './xkcdService'

/**
 * Change to a service: getXkcd
 * Three layers: api, service, display
 */
interface LatestComicDisplay {
  comic: XKCDComic
}

const useComicLoader = () => {
  const [comic, setComic] = useState<XKCDComic>()
  const [error, setError] = useState<string | undefined>()
  const isLoading = !comic

  useEffect(() => {
    getXkcd()
      .then(setComic as any)
      .catch(e => setError(e.message))
  }, [setComic])

  return {comic, error, isLoading}
}

export const LatestComicDisplay4 = ({comic}: LatestComicDisplay) => {
  return (
    <div>
      <h1>XKCD</h1>
      <div>
        <h2>{comic.title}</h2>
        <img src={comic.img} alt={comic.alt} />
      </div>
    </div>
  )
}

export const LatestComic4 = () => {
  const { comic, error, isLoading } = useComicLoader()

  if (error) {
    return (<Error message={JSON.stringify(error)}  />)
  }

  if (comic) {
    return <LatestComicDisplay4 comic={comic}></LatestComicDisplay4>
  } else {
    return <Loading />
  }
}

