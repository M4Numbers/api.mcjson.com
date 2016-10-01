var gql = require("graphql");
var fs = require("fs");
var path = require("path");

module.exports = gql.buildSchema([
`schema {
  query: query
  ${process.env.NODE_ENV != 'production' ? 'mutation: mutation' : ''}
}`,
fs.readFileSync(path.resolve(__dirname,"./schema.gql"),"ascii")].join("\n"));