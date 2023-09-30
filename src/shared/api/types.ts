export interface Page<Record> {
  results: Record[]

  count: number
}

export type ServerError = {
  error: string
  message: string
  statusCode: number
}
