const http = require('http')

console.log('Starting timestamp-service.')

http.createServer((request, response) => {
  const timeStamp = Math.floor(Date.now() / 1000)

  console.log(`Received request at ${timeStamp}.`)

  response.write(`${timeStamp}`)
  response.end()
}).listen(process.env.PORT)