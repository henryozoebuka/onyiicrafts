import mongoose from "mongoose";

const userSchema = mongoose.Schema({

    username: {
        type: String,
        required: true
    },

    firstname: {
        type: String,
        required: true
    },

    lastname: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    phoneNumber: {
        type: Number,
        required: true
    },

    gender: {
        type: String,
        required: true
    },

    role: {
        type: String,
        default: 'user'
    },
})

const UserModel = mongoose.model('User', userSchema)
export default UserModel