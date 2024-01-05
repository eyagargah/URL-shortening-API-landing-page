const express = require('express')
const app = express()
const PORT = 3000

  const qs = require('querystring');
  const http = require('https');
  
  const options = {
    method: 'POST',
    hostname: 'url-shortener-service.p.rapidapi.com',
    port: null,
    path: '/shorten',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Key': '9ae7f59565mshff3b8efdd1ab6a8p109485jsnc113a018920a',
      'X-RapidAPI-Host': 'url-shortener-service.p.rapidapi.com'
    }
  };
  
  const req = http.request(options, function (res) {
    const chunks = [];
  
    res.on('data', function (chunk) {
      chunks.push(chunk);
    });
  
    res.on('end', function () {
      const body = Buffer.concat(chunks);
      console.log(body.toString());
    });
  });
  
  req.write(qs.stringify({
    url: 'https://google.com/'
  }));
  req.end();
  
app.get('/', (request, response) => {
    response.send('hello')
})



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})