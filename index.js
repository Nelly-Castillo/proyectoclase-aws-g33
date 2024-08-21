const express = require('express')

const app = express()
const port = 3000

app.use(express.json())

// get -> obtener datos
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// post -> enviar datos
app.post('/datos', (req, res) => {

    const { nombre } = req.body
    console.log(JSON.stringify(req.body))

    res.send('ok')
})

// Tomando datos del params
app.get('/datos/:id', (req, res) => {

    console.log(JSON.stringify(req.params))
    res.send('ok')
})

// Tomando datos del query
app.get('/datosdos', (req, res) => {

    console.log(JSON.stringify(req.query))
    res.send('ok')
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


