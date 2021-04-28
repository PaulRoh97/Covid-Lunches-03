const app = require("./app")
let server = http.createServer(app)


server.listen('3000', () => {
  console.log('Listening on port 3000')
})