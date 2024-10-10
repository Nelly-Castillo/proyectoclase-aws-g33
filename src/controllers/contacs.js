let contacts = [
	{ id: 1, nombre: "Jose", numero: "6271822" },
	{ id: 2, nombre: "JOSE", numero: "9992278922" }
];

const getAllContact = async(req, res) => {

	try {
		// código para acceder a la BD
		res.status(200).json({ 
			status: "success", 
			message: "Contactos obtenidos correctamente", 
			data: contacts
		});
		// res.status(200).send({ 
		// 	status: "ok", 
		// 	message: "creado correctamente message",
		// 	data:[
		// 		{"id":1, "nombre": "Jose", "numero": 6271822},
		// 		{"id":2,"nombre": "JOSE", "numero": 9992278922} 
		// 	]  
		// })

	} catch (error) {
		res.status(500).json({ 
			status: "error", 
			message: "Error al obtener los contactos", 
			error: error.message 
		})
	}

}

const createContact = async(req, res) => {

	try {
		// Codigo para acceder a la bd
		const { nombre, numero } = req.body
		const newId = contacts.length > 0 ? contacts[contacts.length - 1].id + 1 : 1;
		if (!nombre || !numero) {
			return res.status(400).json({
				status: "error",
				message: "Faltan campos requeridos: nombre o número"
			});
		}
		const newContact = { id: newId, nombre, numero };
		contacts.push(newContact);
		console.log("Nuevo contacto creado:", newContact);
	
		res.status(201).json({
			status: "success",
			message: "Contacto creado correctamente",
			data: newContact
		});
	} catch (error) {
		res.status(503).json({ 
			status: "error", 
			message: "Error al crear el contacto", 
			error: error.message 
		})
	}

}

const getContact = async(req, res) => {

	try {
		const { id } = req.params

		const contact = contacts.find(c => c.id === parseInt(id));

        if (!contact) {
            return res.status(404).json({
                status: "error",
                message: "Contacto no encontrado"
            });
        }

		console.log("Obteniendo contacto con ID:", id);

		res.status(200).json({
			status: "success",
			message: "Contacto obtenido correctamente",
			data: contact
		})
	} catch (error) {
		res.status(500).json({ 
			status: "error", 
			message: "Error al obtener el contacto", 
			error: error.message 
		})
	}
}

const searchContact = async(req, res) => {

	try {
		// Codigo para acceder a la BD
		const query = req.query;
    	const results = contacts.filter(contact =>
            contact.nombre.toLowerCase().includes(query.toLowerCase())
        );
		
		res.status(200).json({
			status: "success",
			message: results.length > 0 ? "Contactos encontrados" : "No se encontraron contactos",
			data: results
		})
	} catch (error) {
		res.status(500).json({ 
			status: "error", 
			message: "Error al buscar contactos", 
			error: error.message 
		});
	}

}


module.exports = {
	getAllContact,
    getContact,
	createContact,
	searchContact
}