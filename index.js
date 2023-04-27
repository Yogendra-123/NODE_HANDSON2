const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
app.get('/',((req,res) =>{
    res.send('<h1>Node Handson 2</h1>')
    res.end()
   
}))

app.get('/api',((req,res)=>{
    res.send('api page called ')
    res.end()
}))
app.get('/main', (req,res)=>{
    // res.send('<h1>What Is Express?</h1>')
    res.send('<h3>Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application.It is a layer built on the top of the Node js that helps manage servers and routes.</h3>')
    res.end()
})

const port = process.env.PORT

app.listen(port, ()=>{
    console.log('Server is running!',`${port}`)
})