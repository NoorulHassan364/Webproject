const express = require('express');
const app = express();
const path=require('path'); 
const hbs=require('hbs');
const port= process.env.PORT||80;

const static_path=path.join(__dirname,'../public')
const views_path=path.join(__dirname,'../templates/views')
const partials_path=path.join(__dirname,'../templates/partials')
app.set('view engine','hbs');
hbs.registerPartials(partials_path)
app.use(express.static(static_path))
app.set('views',views_path)



app.get('/', (req, res) => {
    res.render('index');
})

app.get('/weather', (req, res) => {
    res.render('weather');
})

app.get('*', (req, res) => {
    res.send('404');
})

app.listen(port,()=>{
    console.log(`app started at port ${port}` )
});