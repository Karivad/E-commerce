const express = require("express") // call l'install
const app = express()               // call function
const conn = require("./db")
const config = require("./config")
const port = 3000
const bcrypt = require('bcrypt')
const saltRounds = 10
const jwt = require('jsonwebtoken')

app.use(express.urlencoded({extended: false}))

                // structure des 3 app //


app.get("/users", (req, res) => {
    conn.query("SELECT id, name FROM users", function (err, result) {
        console.log(result);
        if (err) throw err 
        res.send(result)
    })
})


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

    conn.query(`SELECT * FROM users WHERE email = '${req.body.email}'`, function(err, result){      //conn.query = link to mysql
        if (err) throw err
        console.log(result[0]);

        let token = jwt.sign({email: result[0].email, id: result[0].id}, config.secret)
        console.log(token);

        if (result.length < 1){               
            res.status(401).send("Incorrect")     // wrong or missing email from db => 401
        } else {
            let hashed = result[0].password      // TextRow in terminal = Result
            bcrypt.compare(password, hashed, function (err, result){
                if (result) {

                    res.status(200).send({token: token})  // renvoi le token en réponse
                
                } else {

                    res.status(401).send("Mauvais mot de passe :(")
                }
            })
        }
    })
 })

    app.post("/products", (req,res) => {
        const titre = req.body.titre
        const description = req.body.description
        const prix = req.body.prix
        const image = req.body.image
        const stock = req.body.stock
        const user_affiliate_id = req.body.user_affiliate_id
    })

    conn.query(`INSERT INTO products (titre, description, prix, image, stock, user_affiliate_id) VALUES ("${titre}", "${description}", "${prix}"))






app.listen(port, () => {
    console.log('enfin')
})

