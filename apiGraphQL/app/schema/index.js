const { readFileSync } = require("fs");
const path = require("path");

const configuration = {
  types: {
    repository: "./types",
    files: ["Diet", "Ingredient", "FoodGroup"]
  },
  queries: {
    repository: "./",
    files: ["Query"]
  }
};

// Function to read files synchronously:
function read(type) {
  const { repository, files } = configuration[type];
  return files.map(file => readFileSync(path.join(__dirname, repository, `${file}.gql`))).join("\n");
}

// Schemas/types being used in the GraphQL API:
const types = read("types");
const queries = read("queries");

// Construct the combined GraphQL schema from individual parts.
const typeDefs = `#graphql
  ${types}
  ${queries}
`;

module.exports = typeDefs;