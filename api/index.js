const fetch = require("sync-fetch");

const jsonGraphqlExpress = require("json-graphql-server").default
const jsonServer = require('json-server')
const expressSharp = require('express-sharp').expressSharp
const fsAdapter = require('express-sharp').FsAdapter
var data = require('../data/.build/data.json') 
const path = require('path')

const app = require("express")();
const middlewares = jsonServer.defaults({
  readOnly: true
})

const router = jsonServer.router(data, { foreignKeySuffix: '_id' })
router.use(middlewares)
app.use(
  '/api/images/',
  expressSharp({
    imageAdapter: new fsAdapter(path.join(__dirname, '..', 'data','static','images')),
  })
)
app.use("/api/graphql", jsonGraphqlExpress(data));
app.use("/api/rest", router);




module.exports = app