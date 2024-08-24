//creando la conexion a la base de datos con javascript desde node.js

let mysql = require("mysql");//requiere la libreria de mysql
let conexion = mysql.createConnection({//creando la conexion
    host: "localhost", //conectando al servidor
    database: "armorgames", //conectando a la bse de datos
    user: "root",//usuario
    password: "root"//contraseña
});

//realizamos una prueba para validar que este funcionando la realizamos con el sgte metodod

conexion.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log("conexion exitosa");
    }
});

//para finalizar esa conexion de la base de datos realizamos lo sgte:

conexion.end();