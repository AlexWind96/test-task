import { FC, ReactNode } from 'react'
import { IconContext } from 'react-icons'

type IIconsProviderProps = {
  children: ReactNode
}

export const IconsProvider: FC<IIconsProviderProps> = ({ children }) => {
  return <IconContext.Provider value={{ size: '1.5rem' }}>{children}</IconContext.Provider>
}
