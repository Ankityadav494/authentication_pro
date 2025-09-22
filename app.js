const cookieParser = require('cookie-parser');
const express = require('express');
const usermodel = require('./models/user');
const postmodel = require('./models/post');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = express();

app.set('view engine', 'ejs');  
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));  
app.use(cookieParser());
app.use(express.json());

app.get('/', (req, res) => {
   res.render('index');
});
app.post('/register', async (req, res) => {
    let{name,username,email,password,age}=req.body;
    let userexist =  await usermodel.findOne({email:email,username:username});
    if(userexist) return res.status(400).send('User already exists');
        
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(password,salt,async function(err, hash) {
            let user =  await usermodel.create({name,username,email,password:hash,age});
            
            res.redirect('/login');
        });

    });
    
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', async (req,res)=>{
    let{email,password}=req.body;
    let user = await usermodel.findOne({email:email});
    if(!user) return  res.send("user not found ");
   
    const validpassword = await bcrypt.compare(password,user.password);
    if(!validpassword) return res.status(400).send('Invalid password');
    let token = jwt.sign({email:email,userid:user._id},"lolopollll");
    res.cookie('token',token);
   
    res.send('logged in successfully');
 
});
app.get('/logout',(req,res)=>{
    res.cookie("token", "");

    res.send('logged out successfully');
});
app.get('/profile',authenticateToken, (req,res)=>{
   res.send('welcome to profile');
});

function authenticateToken(req,res,next){
   if(!req.cookies.token) return res.status(401).send('Access denied');
   try{
      let user = jwt.verify(req.cookies.token,"lolopollll");
      req.user = user;
      next();
   }catch(err){
      res.status(400).send('Invalid token');
   }
}


 app.listen(3000);