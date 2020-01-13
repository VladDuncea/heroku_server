const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.get('/contact.php', (req, res) => res.send('Hello World!'))
app.get('/', (req, res) => res.send('Hello World!'))

app.post('/contact.php', (req,res) => {
    console.log(req.body);
    res.send({Status: 'OK'});
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))