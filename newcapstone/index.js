const express = require('express')

const{createTables, createComments, createProducts, createUsers, createReviews} = require('./db/seed')

const app = express()

app.use(express.json())

//route for product
app.use('/products',require('./routes/products') )

const init = async ()=>{
    //call createTables first to create all your tables. do a console.log(tables created)
    //for however many users (at least ten) call the createUsers function
    //for however many products (at least 20) call the createProducts function
    //create one review with createReviews
    //create one comment with createComments
    app.listen(PORT, ()=>{
        console.log('the server is running at port:', +PORT)
    })
}

init()