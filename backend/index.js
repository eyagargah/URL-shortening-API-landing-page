const express = require('express')
const app = express()

app.get('/', (request, response) => {
    response.send('hello')
})



const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})