const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, access-control-allow-origin")
    next();
  });

app.get('/contact.php', (req, res) => res.send('Hello World!'))

app.post('/contact.php', (req,res) => {
    console.log(req.body);
    res.send({Status: 'OK'});
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))