const express = require("express") // call l'install
const app = express()               // call function
const conn = require("./db")
const config = require("./config")
const port = 3000
const bcrypt = require('bcrypt')
const saltRounds = 10
const jwt = require('jsonwebtoken')

app.use(express.urlencoded({extended: false}))


app.use('/products', (req, res, next) => {
    const ourToken = req.headers.authorization         //Token recupéré par le header (on met le token dans le header lors du axios)
    jwt.verify(ourToken, config.secret, (err, decoded) => {
        if (err) {                                      // err => Le token n'est pas valide
            res.status(404).send('Accès impossible')
        }
        else {
            res.status(500).send('Accès autorisé')
            next()                                      //Permet de passer au GET ou au POST 
        }
    })
})
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
        const prix = parseFloat(req.body.prix)
        const image = req.body.image
        const stock = parseInt(req.body.stock)
        const user_affiliate_id = req.body.user_affiliate_id

        const insertProduct = `INSERT INTO products (titre, description, prix, image, stock, user_affiliate_id) VALUES ("${titre}", "${description}", "${prix}", "${image}", "${stock}", "${user_affiliate_id}")`

        conn.query(insertProduct, (err, result) => {
            if (err) throw err
            res.send(`Le produit ${titre} a bien été ajouté à la DB`)
        })
    })


app.get("/products", (req, res) => {
        conn.query("SELECT * FROM products", (err, result) => {
            if (err) throw err
            res.status(500).send(result)
        })
    })

app.get("/users/:id", (req, res) => {                                   // exemple = users/1 etc
    const id = req.params.id                                           // params = ds le champs (recup)
    conn.query(`SELECT * FROM users WHERE id = ${id}`, function (err, result) {
        console.log(result);
        if (err) throw err
        let myUser = result[0]
    conn.query(`SELECT titre FROM products WHERE user_affiliate_id = ${id}`, function (err, result) {
        if (err) throw err
        myUser.products = []
        result.forEach(product => {
            myUser.products.push(product.titre)                 /// push "titre" de la db inside le tableau vide
        })
        res.send(myUser)
    })    
        
})

})

app.get("/products/:id", (req, res) => {
    const id = req.params.id

    conn.query(`SELECT * FROM products WHERE id = ${id}`, function (err, result) {
        console.log(result);
        if (err) throw err
        let myProduct = result[0]

    conn.query(`SELECT name FROM users WHERE id = ${myProduct.user_affiliate_id}`, function (err, result) {
        if (err) throw err
        myProduct.seller = []
        result.forEach(user => {
        myProduct.seller.push(user.name)                
        })
        res.send(myProduct)
        
        })

    })

})
    






app.listen(port, () => {
    console.log('enfin')

    })


