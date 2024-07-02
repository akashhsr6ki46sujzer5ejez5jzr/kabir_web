const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); // For password hashing

// Your MongoDB connection string (replace with your actual connection details)
const mongoURI =

"mongodb+srv://bharath:ePFVac2IBpZabQQu@bharath-pro.gzxkczi.mongodb.net/?retryWrites=true&w=majority&appName=bharath-pro";

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));



const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})



module.exports = mongoose.model('User', userSchema);
