var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'social_app'
});

// var connection = mysql.createConnection({
//     host     : 'webprojectmockup.com',
//     user     : 'webprojectmockup_social_app',
//     password : '@2$2O=@oa=X3',
//     database : 'webprojectmockup_social_app'
// });

module.exports = connection;