var mysql = require('mysql');

var connMySQL = function(){
    //console.log('Conexão com o bd foi estabelicida');
    return connection =  mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Dan81#Cris82',
        database: 'portal_noticias'
    });
}

module.exports = function() {
    return connMySQL;
}
    