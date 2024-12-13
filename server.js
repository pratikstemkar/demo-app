const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(4000, '0.0.0.0', () => {
  console.log('Server running on PORT 4000 ....')
})
