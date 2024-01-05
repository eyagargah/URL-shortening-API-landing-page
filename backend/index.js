const express = require('express')
const app = express()
const PORT = 3000
const options = {
    hostname: 'jsonplaceholder.typicode.com',
    path: '/posts',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  
app.get('/', (request, response) => {
    response.send('hello')
})



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})