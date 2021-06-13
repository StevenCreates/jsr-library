import {useContext, useMemo, useCallback} from 'react'
import { AppContext } from '../utils/ReactPagesContext'
export const useAddLinksToNavigation = (newLinks) => {
    const { links } = useContext(AppContext)
    const newNavigationLinks = newLinks && links ? [...links, ...newLinks] : links;
    return newNavigationLinks
}
