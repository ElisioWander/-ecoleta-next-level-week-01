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

//configurando rotas da aplicação
server.get("/", (req, res) => {
    return res.render("index.html")
})

server.get("/create-point", (req, res) => {
    
    console.log(req.query)

    return res.render("create-point.html")
})

server.post("/save-point", (req, res) => {
    return res.send("okay")
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