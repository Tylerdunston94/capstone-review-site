const client = require('./client')

const createTables = async ()=>{
    const SQL = ``
    //drop all your tables first
    //create a table for users that has id, email, password
    //create a table for products id, name, description(optional)
    //create a table for reviews id, users_id(references users id), products_id(references products id), review
    //create a table for comments id, users_id(references users id), comments_id(references comment id), comment
    client.query(SQL)
}
const createUsers = async (username, password)=>{
    const SQL = ``
    //Insert into users (email, password) values($1, $2);
    client.query(SQL,[username, password])
}
const createProducts = async (name)=>{
    const SQL = ``
    //Insert into product (name) values($1);
    client.query(SQL,[name])
}
const createReviews = async (user_id, product_id, review)=>{
    const SQL = ``
    //Insert into reviews (user_id, product_id, review) values($1, $2, $3);
    client.query(SQL,[user_id, product_id, review])
}
const createComments = async (user_id, review_id, comment)=>{
    const SQL = ``
    //Insert into reviews (user_id, review_id, comment) values($1, $2, $3);
    client.query(SQL,[user_id, review_id, comment])
}

module.exports = {createTables, createUsers, createComments, createProducts, createReviews}