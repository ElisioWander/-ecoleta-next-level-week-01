const express = require("express")
const nunjucks = require("nunjucks")

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
    return res.render("create-point.html")
})

server.get("/search", (req, res) => {
    return res.render("search-results.html")
})

server.listen(3000)