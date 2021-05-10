const fetch = require("sync-fetch");

const jsonGraphqlExpress = require("json-graphql-server").default
const jsonServer = require('json-server')

const data = fetch(
  "https://github.com/bketelsen/bkml/releases/download/blox/data.json"
).json();
const app = require("express")();
const middlewares = jsonServer.defaults({
  readOnly: true
})
console.log(__dirname);

const router = jsonServer.router(data, { foreignKeySuffix: '_id' })
router.use(middlewares)

app.use("/api/graphql", jsonGraphqlExpress(data));
app.use("/api/rest", router);


module.exports = app