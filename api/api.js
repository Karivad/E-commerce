const express = require("express") // call l'install
const app = express()               // call function
const conn = require("./db")
const port = 3000
const bcrypt = require('bcrypt')
const saltRounds = 10

app.use(express.urlencoded({extended: false}))

                // structure des 3 app //


// app.get()

app.post("/sign-up", (req, res) => {   // req ds la db
  const name = req.body.name
  const email = req.body.email
  const password =  req.body.password
  const image = req.body.image
  // console.log(name,email,password); 

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) throw err
    let insertUser = `INSERT INTO users (name, email, password, image) VALUES ("${name}", "${email}", "${hash}", "${image}")`;
    console.log(insertUser)

    conn.query(insertUser, (err, result) => {
    console.log(result)
    if (err) throw err
    
    res.send(`${name} a été ajouté à la DB`)

    });
    
  });
  
})  

// app.post()






app.listen(port, () => {
    console.log('enfin')
})

