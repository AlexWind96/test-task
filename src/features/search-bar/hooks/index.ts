import { AxiosError } from 'axios'
import { createQuery } from 'react-query-kit'
import { API, IOnMarketProperty, ISoldProperty } from '@/shared/api'

export const useSoldPropertiesQuery = createQuery<ISoldProperty[], { search: string }, AxiosError>({
  primaryKey: API.autocomplete.basePath + 'sold',
  queryFn: ({ queryKey: [, vars] }) => {
    return API.autocomplete
      .getSoldProperties({ search: vars.search })
      .then((res) => res.data.results)
  },
})

export const useOnMarketPropertiesQuery = createQuery<
  IOnMarketProperty[],
  { search: string },
  AxiosError
>({
  primaryKey: API.autocomplete.basePath + 'on_market',
  queryFn: ({ queryKey: [, vars] }) => {
    return API.autocomplete
      .getOnMarketProperties({ search: vars.search })
      .then((res) => res.data.results)
  },
})
