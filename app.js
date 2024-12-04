const express = require('express');
const app = express();
const port  = 3000
const path = require('path')
const {people} = require('./data')
const { products } = require('./data')



app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './navbar-app/index.html'));
});
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, './navbar-app/about.html'));
})  
app.get('/projects', (req, res) => {
    res.sendFile(path.join(__dirname, './navbar-app/project.html'));
})  
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, './navbar-app/contact.html'));
})  

app.all('*', (req, res) => {
    res.status(200).send("jeri say your seacrh not have he is web");
})

app.listen(port, (req,res) => {
    console.log(`listening app runing on port http://localhost:${port}`)
});