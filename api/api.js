const express = require("express") // call l'install
const app = express()               // call function
const conn = require("./db")
const port = 3000



                // structure des 3 app //

// app.get()

app.post("/sign-up", (req, res) => {   // req ds la db
    
})  

// app.post()






app.listen(port, () => {
    console.log('enfin')
})