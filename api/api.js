const express = require("express") // call l'install
const app = express()               // call function
const conn = require("./db")
const port = 3000
const bcrypt = require('bcrypt')
const saltRounds = 10

app.use(express.urlencoded({extended: false}))

                // structure des 3 app //


app.get()


app.post("/sign-up", (req, res) => {   // req ds la db
  const name = req.body.name
  const last = req.body.last
  const email = req.body.email
  const password =  req.body.password
  const image = req.body.image
  // console.log(name,email,password); 

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) throw err
    let insertUser = `INSERT INTO users (name,last, email, password, image) VALUES ("${name}","${last}", "${email}", "${hash}", "${image}")`;
    console.log(insertUser)

    conn.query(insertUser, (err, result) => {
    console.log(result)
    if (err) throw err
    
    res.send(`${name} a bien été ajouté à la DB`)

    });
    
  });
  
})  

 app.post("/sign-in", (req, res) => {
    const email = req.body.email
    const password =  req.body.password
    console.log(email, password);

    conn.query(`SELECT * FROM users WHERE email = '${req.body.email}'`, function(err, result){
        if (err) throw err
        console.log(result[0]);

        if (result.length < 1){               
            res.status(401).send("Incorrect")     // wrong or missing email from db => 401
        } else {
            let hashed = result[0].password      // TextRow in terminal = Result
            bcrypt.compare(password, hashed, function (err, result){
                if (result) {

                    res.status(200).send("Vous êtes connecté !")
                
                } else {

                    res.status(401).send("Mauvais mot de passe :(")
                }
            })
        }
    })
 })







app.listen(port, () => {
    console.log('enfin')
})

