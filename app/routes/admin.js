module.exports = function(application){
    application.get('/inclusao_noticia', function(req, res){
      application.app.controllers.admin.inclusao_noticia(application, req, res);  
    });

    application.post('/noticias/salvar', function(req, res){
      application.app.controllers.admin.noticias_salvar(application, req, res);
    });
}
