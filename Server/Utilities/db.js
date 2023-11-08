import mysql from 'mysql';

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'employeems'
})

con.connect(function (err,) {
    if (err) {
        console.log("There was a problem connection to the database :(")
    } else {
        console.log("You are connected to the database :)")
    }
})

export default con;