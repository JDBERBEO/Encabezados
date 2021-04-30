const express = require('express')

const app = express()

app.get('/', (req, res) => {
   console.log(req.header('user-agent')) 
  })

  app.listen(3000, () => console.log('Server running in port 3000'));