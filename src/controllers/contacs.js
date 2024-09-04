
const getContact = async(req, res) => {

	try {
		// código para acceder a la BD
		res.status(200).send({ 
			status: "ok", 
			message: "creado correctamente message",
			data:[
				{"id":1, "nombre": "Jose", "numero": 6271822},
				{"id":2,"nombre": "JOSE", "numero": 9992278922} 
			]  
		})

	} catch (error) {
		res.status(500).send({ 
			status: "hay un problema", 
			message: error
		})
	}

}




module.exports = {
    getContact
}