//importar a dependência SQLite
const sqlite3 = require("sqlite3").verbose()

//criar o objeto que irá fazer operações no banco de dados

const db = new sqlite3.Database("./src/database/database.db")

db.serialize(() => {

//     // //criar uma tabela
//     // db.run(`
//     //     CREATE TABLE IF NOT EXISTS places (
//     //         id INTEGER PRIMARY KEY AUTOINCREMENT,
//     //         image TEXT,
//     //         name TEXT,
//     //         address TEXT,
//     //         address2 TEXT,
//     //         state TEXT,
//     //         city TEXT,
//     //         items
//     //     );
//     // `)
    
//     // //inserir dados na tabela
//     // const query = `
//     //     INSERT INTO places (
//     //         image,
//     //         name,
//     //         address,
//     //         address2,
//     //         state,
//     //         city,
//     //         items
//     //     ) VALUES (?,?,?,?,?,?,?);
//     // `

//     // const values = [
//     //     "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
//     //     "Papersider",
//     //     "Guilherme Gamballa, Jardim América",
//     //     "N° 260",
//     //     "Rio do Sul",
//     //     "Santa Catarina",
//     //     "Papéis e Papelão"
//     // ]

//     // function afterInsertData(err) {
//     //     if (err) {
//     //         return console.log(err)
//     //     }

//     //     console.log("Cadastrado com sucesso")
//     //     console.log(this)
//     // }

//     // db.run(query, values, afterInsertData)

    
    // consutar os dados na tabela
    // db.all(`SELECT * FROM places`, function(err, rows) {
    //     if (err) {
    //         return console.log(err)
    //     }

    //     console.log("Aqui estão os seus registros")
    //     console.log(rows)
    // })
   

    // // deletar dados na tabela
    // db.run(`DELETE FROM places WHERE id = ?`, [18], function(err) {
    //     if (err) {
    //         console.log(err)
    //     }

    //     console.log("Registro deletado com sucesso")
    // })

    
})

module.exports = db