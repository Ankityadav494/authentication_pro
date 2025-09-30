const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/miniDB');
const userSchema =mongoose.Schema({
   name:String,
   username:String,
   email:String,
   password:String,
   age:Number,
   posts:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:'post'
   }],
   profilepic:[{
      type:String,
      default:"default.jpg"
   }] 
})
module.exports= mongoose.model('User',userSchema  );