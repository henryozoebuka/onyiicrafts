import bcrypt from 'bcryptjs'
import UserModel from "../models/UserModel.js"


//create user
const createUser = async (req, res) => {
    try {
        const { username, firstname, password, gender } = req.body

        if (!username || !firstname || !password || !gender) {
            return res.status(400).json({ message: 'All fields are required.' })
        }

        //check if user exists
        const existingUser = await UserModel.findOne({username})
        if (existingUser) {
            return res.status(409).json({message: 'Username already exists. Try another one.'})
        }


        //generate salt for password hashing
        const salt = await bcrypt.genSalt(10)

        //hash the password
        const hashedPassword = await bcrypt.hash(password, salt)

        const user = await UserModel.create({
            ...req.body,
            password: hashedPassword
        })
        if (user) {
            return res.status(201).json({message: `${user.username} created successfully.`})
        } else {
            return res.status(501).json({ message: 'Something went wrong while creating your account. Try again later.' })
        }
    } catch (error) {
        console.error('Error occurred while creating your account: ', error)
        res.status(500).json({ message: 'Failed to create user' })
    }
}

export {createUser}