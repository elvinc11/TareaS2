var express = require('express');
var path = require('path');
var app = express();
var canciones = require('./canciones');

app.listen(3000, function () {
    console.log('App escuchando en puerto 3000!');
  });

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname,'public','pagina.html'));
});

app.use('/canciones', canciones);

app.get('/descarga', function (req, res) {
    res.download(path.join(__dirname,'public','archivos','musica-1.webp'),'musica-1.webp',
        function(err){
            if (err)
                console.log('Error al descargar');
            else
                console.log('Descargado');
        });
});

app.get('/canciones/descarga', function (req, res) {
    var cancion =  'Cancion:' + req.query.nombre + ' ' + 'Autor:'+ req.query.autor; 
    res.download(path.join(__dirname,'public','archivos','foto.jpg'),'foto.jpg',
    function(err){
        if (err)
            console.log('Error al descargar', cancion);
        else
            console.log('Descargada la', cancion);
    });
});

app.get('/acerca', function (req, res) {
    var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html" charset="UTF-8" />'+
    '</head>'+
    '<body>'+
    '<br>' +
    '<p>Elvin Castillo 61921535 Ingenieria en informatica</p>' +
    '<br>'+
    '<p>Descripcion: pagina para ver lista de canciones y descargar canciones</p>'+
    '</body>'+
    '</html>';
    res.send(body);
});
app.use(function(req, res) {
    res.status(404).send('Esa pagina no existe!');
  });

  