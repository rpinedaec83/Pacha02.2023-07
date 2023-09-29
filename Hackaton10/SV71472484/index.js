const dbConnect = require("./server/server")
const express = require('express')
const ProductScheme = require("./model/model")
const app = express()
const port = 3000

/*app.get('/', (req, res) => {
  res.send('Hello World!')
})
*/
app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto: ${port}`)
})
dbConnect();