const { faker } = require('@faker-js/faker');
const express = require('express');

const app = express(); //inicializa express

const objetoUsuario = ()=>({
    _id: faker.datatype.uuid(),
    nombre:faker.name.findName(),
    apellido:faker.name.lastName(),
    telefono:faker.phone.phoneNumber(),
    email:faker.internet.email(),
    password:faker.internet.password()
});

const objetoEmpresa = () =>({
    _id:faker.datatype.uuid(),
    nombre:faker.company.companyName(),
    direccion:{
        calle:faker.address.streetAddress(),
        ciudad:faker.address.city(),
        estado:faker.address.state(),
        cp:faker.address.zipCode(),
        pais:faker.address.country()
    }
    

});

//ruta de la api
app.get("/api/users/new",(req,res)=>{ //llama a la lista de usuarios
    const nuevoUsuario = objetoUsuario();
    res.json(nuevoUsuario);
})

app.get("/api/companies/new",(req,res)=>{
    const nuevaEmpresa = objetoEmpresa();
    res.json(nuevaEmpresa);
});

app.get("/api/user/company",(req,res)=>{
    const nuevoU = objetoEmpresa();
    const nuevoE = objetoUsuario();
    res.json([nuevoU,nuevoE]);
})


//localhost:8000
app.listen(8000,()=>console.log("servidor corriendo"));//ejecutando servidor o levantando servidor