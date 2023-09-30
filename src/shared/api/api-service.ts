import axios, { AxiosInstance } from 'axios'
import { API_URL } from '@/shared/config'
import { AutoCompleteEndpoints } from './autocomplete'

export { Endpoints } from './endpoints'

export class ApiService {
  instance: AxiosInstance

  autocomplete: AutoCompleteEndpoints

  constructor(instance: AxiosInstance) {
    this.instance = instance
    this.autocomplete = new AutoCompleteEndpoints(instance)
  }
}

export const API = new ApiService(
  axios.create({
    baseURL: API_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  })
)
