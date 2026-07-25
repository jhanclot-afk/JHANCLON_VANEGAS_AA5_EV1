//se el indica que libreria usar
const express = require("express");
//se crea al app
const app = express();
//se crea el puerto
const PORT = 3000;
//SE CONVIERTE LA INFORMACION DE EXPRESS A JSON
app.use(express.json());
//se crea la constante donde se almacenara el usuario
const persona = [];
/*========================================================================
CODIGO DEL REGISTRO
===========================================================================
*/
//SE CREA LA RUTA PARA EL REGISTRO
app.post("/registro", (req, res) => {
    const { usuario, password } = req.body;
    persona.push({
        usuario,
        password
    });
    //respuesta al enviar la informacion
    res.json({
        mensaje: "SE RESGISTRO CORRECTAMENTE YA TIENE ACCESO A LA PLATAFORTMA"
    });
});
/*========================================================================
CODIGO DEL LOGIN
===========================================================================
*/
//se crea la ruta a login
app.post("/login", (req, res) => {
    //obtener usuario y contraseña
    const { usuario, password } = req.body;
    //buscar el usuario si esta inscrito
    const encontrado = persona.find(
        u => u.usuario === usuario && u.password == password
    );

    //respuesta de autenticacion
    if (encontrado) {
        res.json({
            mensaje: "AUTENTICACION SATISFACTORIA"
        });
    } else {
        res.status(401).json({
            mensaje: "ERROR DE AUTENTICACION"
        });
    }
});

app.listen(PORT, () => {
    console.log("SERVIDOR EN MARCHA....");
});