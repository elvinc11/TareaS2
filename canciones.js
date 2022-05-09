var path = require('path');
var express = require('express');
var router = express.Router(); 


router.use(function (req, res, next) {
    console.log('middleware Canciones');
    next();
  });


router.get('/', function(req, res){
    res.sendFile(path.join(__dirname,'public','canciones.html'));
});

router.post('/', function(req, res){
    res.send('Respuesta a POST');
});

router.put('/', function(req, res){
    res.send('Respuesta a PUT');
});

router.delete('/', function(req, res){
    res.send('Respuesta a DELETE');
});

module.exports = router;