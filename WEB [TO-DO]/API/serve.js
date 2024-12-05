const express = require("express");
const app = express()
const port= 3000;
const{Router} = require('express');
const router = Router();

const conective = require("./DB/conective.js");
const service = require("./DB/service.js");
const UserConstrollers = require("./controllers/controllerUsers.js")


service.init(conective);

app.use(router)

router.get('/users',(req,res)=>{
    res.send("Listando todos os usuarios...");
});
router.post('/users',(req,res)=>{
    res.send("Chegou aqui, estamos criando um novo usuario...");
});
router.put('/users:id',(req,res)=>{
    res.send("Chegou aqui, estamos atualizando o usuario...");
});

router.delete('/users/:id',(req,res)=>{
    res.send("Chegou aqui, estamos deletando o usuario...");
});

module.exports = router;

app.listen(port, (error)=>{
    if(error){
        console.log("Deu ruim");
        return;
    }
    console.log("Servidor está funcionando no endereço: 'localhost:3000/...'");
});

