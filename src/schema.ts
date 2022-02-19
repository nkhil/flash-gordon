import { builder } from './builder'
import { 
  Books,
  Transactions,
  IBook,
  ITransaction,
  TransactionCategory,
} from './sample-data'

export const Book = builder.objectRef<IBook>('Book')
export const Transaction = builder.objectRef<ITransaction>('Transaction')
export const Category = builder.objectRef<TransactionCategory>('Category')

Book.implement({
  fields: t => ({
    id: t.exposeID('id'),
    title: t.exposeString('title'),
    author: t.exposeString('author'),
  }),
})

Transaction.implement({
  fields: t => ({
    id: t.exposeID('id'),
    merchantName: t.exposeString('merchantName'),
    amount: t.exposeString('amount'),
    date: t.exposeString('date'),
    category: t.exposeStringList('category'),
  }),
})

builder.queryType({
  fields: t => ({
    books: t.field({
      type: [Book],
      nullable: true,
      resolve: () => 
        [...Books.values()],
    }),
    allTransactions: t.field({
      type: [Transaction],
      nullable: true,
      resolve: () =>
        [...Transactions.values()],
    }),
  }),
})

export const schema = builder.toSchema({})
