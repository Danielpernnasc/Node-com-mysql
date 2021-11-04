var app = require('./config/server');

// var rotaNoticias = require('./app/routes/noticias')(app);

// var rotaHome = require('./app/routes/home')(app);

// var rotaFormInclusaoNoticias = require('./app/routes/formulario_inclusao_noticia')(app);



// app.get('/tecnologia', function(req, res){
//     res.render("secao/tecnologia.ejs")
// });

app.listen(8000, function(){
    console.log("Servidor ON");
});