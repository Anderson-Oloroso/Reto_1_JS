const entradaUsuario = {
    nombre: "henrik",
    apellido: "garcia",
    email: "garcia123henrik@gmail.com",
    telefono : 45327821,
    ciudad: "Ciudad de Guatemala",
    pais: "Guatemala",
    activo: true
}

console.log(entradaUsuario);

const {email: correo, telefono: contacto} = entradaUsuario
const {nombre, apellido,activo} = entradaUsuario


const usuarioFormateado = {
    identidad:{
        nombre,
        apellido
    },
    contactoInfo:{
        correo, 
        contacto,
        ubicacion:{
            ciudad:"Ciudad de Guatemala",
            pais:"Guatemala"
        },
        activo
    }
}

console.log(usuarioFormateado)