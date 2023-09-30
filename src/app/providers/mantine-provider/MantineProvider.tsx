import { FC, ReactNode } from 'react'
import { MantineProvider as Provider } from '@mantine/core'
import { theme } from '@/shared/theme'

type IMantineProviderProps = {
  children: ReactNode
}

export const MantineProvider: FC<IMantineProviderProps> = ({ children }) => {
  return <Provider theme={theme}>{children}</Provider>
}
