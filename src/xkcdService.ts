import { XKCDComic } from './types'

export type XkcdService = () => Promise<XKCDComic>

export const getXkcd: XkcdService = async (): Promise<XKCDComic> => (
  await fetch('http://localhost:3000/')
).json()