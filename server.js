const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .use(express.json())
  .get('/', (req, res) => res.send('Hello Wordl!'))
  .post('/contact.php', (req,res) => {
    console.log(req.body);
    res.send({Status: 'OK'});})
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
