var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');
var path = require('path');
var fs = require('fs');
var readdir = require("readdir-plus");

// The root provides a resolver function for each API endpoint
let Database = require("./db.js");

let itemDB = new Database(path.resolve("./data/items"));
let blockDB = new Database(path.resolve("./data/blocks"));

var root = {
    items: (args) => {
        return itemDB.entries.then(items => items.map(e => e.data()).filter(e => args.id == null || e.id == args.id))
    },
    blocks: (args) => {
        return blockDB.entries.then(items => items.map(e => e.data()).filter(e => args.id == null || e.id == args.id))
    }
};

module.exports = graphqlHTTP({
    schema: require("./schema"),
    rootValue: root,
    graphiql: true,
});