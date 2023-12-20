const mysql = require ('mysql2');
const pool= mysql.createPool({
    user: 'root',
    database: 'squeme_tienda_funkoshop',
    password: 'Guife2022',
    host: 'localhost' ,
    port: 3306 ,
    connectionLimit:10 ,
    waitForConnections: true ,
    queueLimit: 0 

});

pool.getConnection((err,conn)=>{
    if(err){
        console.log('Hubo un error al conectarse a la DB :' + err);
    }else{
        console.log ('conexion a la base de datos exitosa');
        conn.release();
    }
    });

module.exports = {
    conn: pool.promise()
}