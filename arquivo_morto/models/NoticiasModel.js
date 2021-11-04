function NoticiasModel(connection){
    this._connection = connection;
}

NoticiasModel.prototype.getNoticias = function(callback){
    this._connection.query('SELECT * FROM noticias ORDER BY data_criacao DESC', callback);
}

NoticiasModel.prototype.getNoticia = function(id_noticia, callback){
    console.log(id_noticia.id_noticia);
    this._connection.query('SELECT * FROM noticias WHERE id_noticia = ' + id_noticia.id_noticia, callback);
}

NoticiasModel.prototype.salvarNoticia = function(noticia, callback){
    this._connection.query('INSERT INTO noticias SET ?', noticia, callback);
}

NoticiasModel.prototype.getFiveLatsnews = function(callback){
    this._connection.query('SELECT * FROM noticias ORDER BY data_criacao DESC LIMIT 5', callback);
}

module.exports = function(){
    return NoticiasModel;
}