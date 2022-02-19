import faker from '@faker-js/faker'

import { randomCategory } from './helpers/random-category'

export interface IBook {
  id: string;
  title: string;
  author: string;
}

export enum TransactionCategoryEnum {
  Groceries = 'groceries',
  Cash = 'cash',
  Utilities = 'utilities',
  Transport = 'transport',
  Entertainment = 'entertainment',
  EatingOut = 'eating out',
  Shopping = 'shopping',

  Default = 'uncategorised'
}

export type TransactionCategory = TransactionCategoryEnum[]

export type TransactionCategoryValue = (keyof typeof TransactionCategoryEnum)
export interface ITransaction {
  id: string;
  merchantName: string;
  amount: string;
  date: string;
  category: TransactionCategory;
}

export const Books = new Map<string, IBook>()
export const Transactions = new Map<string, ITransaction>()

for (let i = 0; i < 60; i++) {
  Books.set(String(i), {
    id: String(i),
    title: faker.hacker.adjective(),
    author: faker.name.firstName(),
  })

  Transactions.set(String(i), {
    id: String(i),
    merchantName: faker.company.companyName(),
    amount: faker.finance.amount(),
    date: faker.date.past().toISOString(),
    category: [TransactionCategoryEnum[randomCategory()]],
  })
}
