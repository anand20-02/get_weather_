const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 8000;

const static_path = path.join(__dirname , '/public' )
const partials_path = path.join(__dirname , '/templates/partials' );
const view_path = path.join(__dirname , '/templates/views' );
console.log(static_path);

app.set("view engine" , "hbs");
app.set("views" , view_path);
app.use(express.static(static_path));
hbs.registerPartials(partials_path);

app.get('/' ,(req , res)=>{
     res.render("index");
})
app.get('/about' ,(req , res)=>{
     res.render("about");
})
app.get('/weather' ,(req , res)=>{
     res.render("weather");
})

app.listen(port , (res , req)=>{
    console.log(`this app is running on the port ${port}`)
})

