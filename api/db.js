import mysql from "mysql"

export const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:"toqur9393!!",
    database:"blog",
})

