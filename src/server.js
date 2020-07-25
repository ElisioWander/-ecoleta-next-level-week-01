const express = require("express")
const nunjucks = require("nunjucks")
const db = require("./database/db")

const server = express()

nunjucks.configure("src/views", {
    express: server,
    noCache: true
})


//configurar pasta public para que fique disponível
//como se estivisse na pasta raíz do projeto
server.use(express.static("public"))

//habilitar o uso do REQ.BODY na nossa aplicação
server.use(express.urlencoded({ extended: true }))

//configurando rotas da aplicação
server.get("/", (req, res) => {
    return res.render("index.html")
})

server.get("/create-point", (req, res) => {
    
    console.log(req.query)

    return res.render("create-point.html")
})

server.post("/save-point", (req, res) => {
    
    const query = `
        INSERT INTO places (
            image,
            name,
            address,
            address2,
            state,
            city,
            items
        ) VALUES (?,?,?,?,?,?,?);
    `

    const values = [
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items
    ]

    function afterInsertData(err) {
        if (err) {
            return console.log(err)
        }

        console.log("Cadastrado com sucesso")
        console.log(this)

        return res.send("okay")
    }

    db.run(query, values, afterInsertData)
    
})

server.get("/search", (req, res) => {

    db.all(`SELECT * FROM places`, function(err, rows) {
        if (err) {
            console.log(err)
        }

        console.log("Aqui estão todos os seus registros")
        console.log(rows)

        const total = rows.length

        return res.render("search-results.html", { places: rows, total: total })
    })
})

server.listen(3000)