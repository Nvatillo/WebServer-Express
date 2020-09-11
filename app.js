const http = require('http');

http.createServer((req, res) => {

        res.writeHead('200', { 'Content-Type': 'application/json' });
        let salida = {
            nombre: "francisco",
            apellido: "gajardo"
        }
        res.write(JSON.stringify(salida));
        res.end();
    })
    .listen(8080);


console.log('escuchando el puerto');