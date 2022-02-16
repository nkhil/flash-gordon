import { ApolloServer } from 'apollo-server'
import resolvers from './resolvers'
import { typeDefs } from './type-definitions'

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
  console.log(`Server listening on ${url}`)
})
