import mysql from 'mysql2'
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'xisxomD1234@',
    database: 'app_perpustakaan'
})
db.connect((err) =>{
    if(err) return console.log('error' + err.message)
        console.log('Connected to database')
    
})

export default db