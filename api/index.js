const fetch = require("sync-fetch");

const jsonGraphqlExpress = require("json-graphql-server").default
const jsonServer = require('json-server')
const expressSharp = require('express-sharp').expressSharp
const httpAdapter = require('express-sharp').HttpAdapter

var cors = require('cors')

const app = require("express")();
app.use(cors)
const data = fetch(
  "https://github.com/bketelsen/bkapi/releases/download/blox/data.json"
).json();
const router = jsonServer.router(data, { foreignKeySuffix: '_id' })

app.use(
  '/api/images/',
  expressSharp({
    imageAdapter: new httpAdapter({
      prefixUrl: 'https://bkapi.vercel.app/images/'}),
  })
)
app.use("/api/graphql", jsonGraphqlExpress(data));
app.use("/api/rest", router);




module.exports = app