const usuarios ={
    nombre: "henrik",
    apellido: "garcia",
    email: "garcia123henrik@gmail.com",
    telefono : 45327821,
    ciudad: "Ciudad de Guatemala",
    pais: "Guatemala",
    activo: true
}

console.log(usuarios);

const {email: correo, telefono: contacto} = usuarios
