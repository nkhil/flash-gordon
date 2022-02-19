import type { TransactionCategoryValue } from '../sample-data'
import { TransactionCategoryEnum } from '../sample-data'

export const randomCategory = (): TransactionCategoryValue => {
  const categories = Object.keys(TransactionCategoryEnum) as TransactionCategoryValue[]
  const randomIndex = () => Math.floor(Math.random() * categories.length)
  return categories[randomIndex()] 
}
