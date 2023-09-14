import { createContext } from 'react'
import { getXkcd, XkcdService } from './xkcdService'

export const XkcdServiceContext = createContext<XkcdService>(getXkcd);
