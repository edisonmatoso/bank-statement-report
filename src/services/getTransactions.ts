import { DataFetch } from './types'

export const getTransactions = async () => {
  const response = await fetch('http://localhost:3001/data')
  const json: DataFetch = await response.json()
  return json
}
