import type { AxiosPromise } from 'axios'
import { Endpoints } from '../endpoints'
import { Page } from '../types'
import { OnMarketProperty, SoldProperty } from './model.ts'

export class AutoCompleteEndpoints extends Endpoints {
  basePath = 'autocomplete'

  getSoldProperties = (params: { search: string }): AxiosPromise<Page<SoldProperty>> => {
    return this.instance.get(this.basePath + `/sold_objects/`, {
      params: {
        q: params.search,
      },
    })
  }
  getOnMarketProperties = (params: { search: string }): AxiosPromise<Page<OnMarketProperty>> => {
    return this.instance.get(this.basePath + `/on_market/`, {
      params: {
        q: params.search,
      },
    })
  }
}
