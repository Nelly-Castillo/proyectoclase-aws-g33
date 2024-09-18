const express = require('express')

const app = express()
const port = 3000

const ContactsRoutes = require('./src/routes/contactRoutes')

app.use(express.json())


// RUTA DE CONTACTOS
app.use('/contactos', ContactsRoutes)




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


