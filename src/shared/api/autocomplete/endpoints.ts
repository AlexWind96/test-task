import type { AxiosPromise } from 'axios'
import { Endpoints } from '../endpoints'
import { Page } from '../types'
import { IOnMarketProperty, ISoldProperty } from './model.ts'

export class AutoCompleteEndpoints extends Endpoints {
  basePath = 'autocomplete'

  getSoldProperties = (params: { search: string }): AxiosPromise<Page<ISoldProperty>> => {
    return this.instance.get(this.basePath + `/sold_objects/`, {
      params: {
        q: params.search,
      },
    })
  }
  getOnMarketProperties = (params: { search: string }): AxiosPromise<Page<IOnMarketProperty>> => {
    return this.instance.get(this.basePath + `/on_market/`, {
      params: {
        q: params.search,
      },
    })
  }
}
