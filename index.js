const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()
const { readData, writeData } = require('./function')
const app = express()
const port = process.env.PORT || 3001

app.use(bodyParser.json())//middleware

app.get('/dishes', (req,res)=>{
    const data = readData()
    res.json(data.dishes)
})

app.get('/books', (req,res)=>{
    const data = readData()
    res.json(data.books)
})

app.get('/',(req, res)=>{
    res.send('welcome to my api with node JS')
}) // es lo mismo que http://localhost:300

app.post('/dishes', (req,res)=>{
    const data = readData()//primero leer archivo
    const dish = req.body;//obtengo el contenio del bddy
    const newdish = {
        id: data.dishes.length+1,
        ...dish
    }
    data.dishes.push(newdish)//agregamos el nuevo plato
    writeData(data)
    res.json(newdish)
})

app.post('/books',(req,res)=>{
    const data =readData()
    const book = req.body
    const newBook = {
        id: data.books.length+1,
        ...book
    }
    data.books.push(newBook)
    writeData(data)
    res.json(newBook)
})

app.put('/dishes/:id',(req,res)=>{
    const data =readData()
    const  body = req.body
    const id = parseInt(req.params.id)//transforma el id que captura como string desde los parametros y lo transforma a int
    const dishIndex = data.dishes.findIndex(dish => dish.id === id)
    data.dishes[dishIndex] = {
        id,
        ...body
    }
    writeData(data)
    res.json({message: "update was succesfull"})
})

app.put('/books/:id', (req,res)=>{
    const data = readData()
    const body = req.body
    const id = parseInt(req.params.id)
    const bookIndex = data.books.findIndex(book => book.id === id)
    data.books[bookIndex] = {
        id,
        ...body
    }
    writeData(data)
    res.json({message: "update was successful"})
})

app.delete("/dishes/:id", (req,res)=>{
    const data = readData()
    const body =req.body;
    const id = parseInt(req.params.id)
    const dishIndex =data.dishes.findIndex(dish=> dish.id ===id)
    data.dishes[dishIndex] = {
        id,
        ...body
    }
    writeData(data)
    res.json({message: "el plato se actializó correctamente"})
})

app.delete("/books/:id", (req,res) =>{
    const data = readData()
    const body = req.body
    const id = parseInt(req.params.id)
    const bookIndex = data.books.findIndex(book=>book.id === id)
    data.books[bookIndex] = {
        id,
        ...body
    }
    writeData(data)
    res.json({message: "se eliminó correctamente"})
})

app.listen(port, ()=>{
    console.log(`el servidor esta corriendo en el puerto ${port}`)
})