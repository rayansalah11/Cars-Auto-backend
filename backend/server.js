const app = require("./app");
const dotenv = require("dotenv");


// config

    require("dotenv").config({
        path:"backend/config/.env"
    })

// create server
const server = app.listen(process.env.PORT,() =>{
    console.log(`Server is working on http://localhost:${process.env.PORT}`)
})