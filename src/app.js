const express=require("express");
const path=require ("path");
const hbs=require("hbs");
const app = express();
const port=3000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require("./conn");
// Create a mongoose schema
const formDataSchemas = new mongoose.Schema({
  name: String,
  email:String,
  password:String,
  phone: String,
});
// Create a mongoose model
const FormDat = mongoose.model('FormDat', formDataSchemas);

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(bodyParser.json());

const static_path=path.join(__dirname,"../public");
const sta = path.join(__dirname, "../public/js");
console.log(sta);
console.log(static_path);
const template_path=path.join(__dirname,"../templates/views");
console.log(template_path);
const partials_path=path.join(__dirname,"../templates/partials")
// views handelbar hbs;
app.set('view engine','hbs');
app.set('views', template_path);
hbs.registerPartials(partials_path);

//making connection for pahe 
app.use(express.static(static_path));
app.use(express.static(sta));

app.get("/home",(req,res)=>{
    res.render('home');
});
app.get("/about",(req,res)=>{
        res.render('about');
    });
app.get("/weatherapp",(req,res)=>{
    res.render('weatherapp');
});
app.get("/contect",(req,res)=>{
    res.render('contect');
});
app.get("/note",(req,res)=>{
    res.render('note');
});
app.get("*",(req,res)=>{
    res.render('404error',{
        errorMsg:'Opps ! page not found'
    });
});


app.post('/submit', (req, res) => {
    const { name, email, password, phone} = req.body;
  
    // Create a new FormData instance
    const formDat = new FormDat({
      name,
      email,
      password,
      phone
        });
    // Save the data to MongoDB
    formDat.save()
    .then(() => {
      res.render('submitiondone');
    })
    .catch((err) => {
      console.error(err);
      res.send('Error saving data to MongoDB');
    });
  });
  
app.listen(port,()=>{
    console.log(`connected to server ${port}`);
});