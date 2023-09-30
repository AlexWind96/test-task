import { QueryClientProvider as Provider } from '@tanstack/react-query'
import { FC, ReactNode } from 'react'
import { queryClient } from '@/shared/libs'

type IQueryClientProviderProps = {
  children: ReactNode
}

export const QueryClientProvider: FC<IQueryClientProviderProps> = ({ children }) => {
  return <Provider client={queryClient}>{children}</Provider>
}
