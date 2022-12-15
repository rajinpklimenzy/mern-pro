import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    firstname:String,
    lastname:String,
    email:String,
    password:String,
    confirmPassword:String
});

const user = mongoose.model('user',userSchema);
export default user;