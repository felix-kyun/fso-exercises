import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { books } from "./books.mjs";
import { authors } from "./authors.mjs";
import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeTypeDefs } from "@graphql-tools/merge";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { allBooks } from "./resolvers/allBooks.mjs";
import { allAuthors } from "./resolvers/allAuthors.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const typeArray = loadFilesSync(path.join(__dirname, "./*.gql"));
const typeDefs = mergeTypeDefs(typeArray);

const resolvers = {
  Query: {
    bookCount: () => books.length,
    authorCount: () => authors.length,
    allBooks,
    allAuthors,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: {
    port: 4000,
  },
});

console.log(`Server ready at ${url}`);
