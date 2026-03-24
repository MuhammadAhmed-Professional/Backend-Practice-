import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username:{
        type: mongoose.Schema.Types.String,
        required: true        
    },
    email:{
        type: mongoose.Schema.Types.String,
        unique: true,
        required: true
    },
    password:{
        type: mongoose.Schema.Types.String,
        required: true
    }
}, {timestamps: true})

const User = mongoose.model('user', UserSchema)

export default User;
