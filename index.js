const express = require('express')
const cors = require('cors')

const app = express()
require('dotenv').config()
const port = process.env.PORT || 3000;

const ContactsRoutes = require('./src/routes/contactRoutes');

// var corsOptions = {
//   origin: '*',
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }

app.use(express.json());
app.use(cors());

// RUTA DE CONTACTOS
app.use('/contactos', ContactsRoutes);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


