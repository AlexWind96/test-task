import { AxiosError } from 'axios'
import { createQuery } from 'react-query-kit'
import { API, OnMarketProperty, SoldProperty } from '@/shared/api'

export const useSoldPropertiesQuery = createQuery<SoldProperty[], { search: string }, AxiosError>({
  primaryKey: API.autocomplete.basePath + 'sold',
  queryFn: ({ queryKey: [, vars] }) => {
    return API.autocomplete
      .getSoldProperties({ search: vars.search })
      .then((res) => res.data.results)
  },
})

export const useOnMarketPropertiesQuery = createQuery<
  OnMarketProperty[],
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
