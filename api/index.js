const fetch = require("sync-fetch");

const jsonGraphqlExpress = require("json-graphql-server").default
const jsonServer = require('json-server')
const expressSharp = require('express-sharp').expressSharp
const fsAdapter = require('express-sharp').FsAdapter

const path = require('path')
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
app.use(
  '/api/g',
  expressSharp({
    imageAdapter: new fsAdapter(path.join(__dirname, '..', 'images')),
  })
)
app.use("/api/graphql", jsonGraphqlExpress(data));
app.use("/api/rest", router);




module.exports = app