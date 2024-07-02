const express = require('express');
const path = require('path');
const User = require('./models/user');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); // For password comparison
const { error } = require('console');
const user = require('./models/user')
const app = express();
const port = process.env.PORT || 3000; // Use environment variable or default port 3000



// Set view engine to ejs
app.set('view engine', 'ejs' );
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));

// Serve static files from public directory (optional)
app.use(express.static('public'));

//home route 

app.get('/index', function(req, res){
    res.render("index" )
})

app.get('/about', (req, res) => {
  res.render('about')
})


app.get('/skills', (req, res) => {
  res.render('skills')
})

// Routes




app.get('/', function(req, res){
    res.render("signup")
});



app.post('/signup', async function(req, res){
  const {username, email, password} = req.body;
  try {
if(!username || !email || !password){
  throw new Error('Please fill all the fields')

}

const existingUser = await user.findOne({email})
if(existingUser){
  throw new Error("Already used this email")
}

const newUser = new User({username, email, password})
await newUser.save();
res.render("index")
    
  } catch (error) {
    console.error(error)
    res.status(400).send('Somthing is wrong!')
    
  }
})



app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
