//importar a dependência SQLite
const sqlite3 = require("sqlite3").verbose()

//criar o objeto que irá fazer operações no banco de dados

const db = new sqlite3.Database("./src/database/database.db")

db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTES places();
    `)
})