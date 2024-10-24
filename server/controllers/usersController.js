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
        const existingUser = await UserModel.findOne({ username })
        if (existingUser) {
            return res.status(409).json({ message: 'Username already exists. Try another one.' })
        }


        //generate salt for password hashing
        const salt = await bcrypt.genSalt(10)

        //hash the password
        const hashedPassword = await bcrypt.hash(password, salt)

        const user = await UserModel.create({
            ...req.body,
            password: hashedPassword
        })

        return res.status(201).json({ message: `${user.username} created successfully.` })

    } catch (error) {
        console.error('Error occurred while creating your account: ', error)
        res.status(500).json({ message: 'Failed to create user' })
    }
}


//user login

const userLogin = async (req, res) => {
    const { username, password } = req.body
    try {
        if (!username || !password) {
            return res.status(400).json({ message: 'All fields are required.' })
        }
        const user = await UserModel.findOne({ username })
        if (!user) {
            return res.status(404).json({ message: 'User does not exist' })
        }
        const checkPassword = await bcrypt.compare(password, user.password)
        if (!checkPassword) {
            return res.status(401).json({ message: 'Incorrect password.' })
        }
        const {password: _, ...userData} = user.toObject()
        res.status(200).json({ user: userData })

    } catch (error) {
        console.error('This error occurred while logging in: ', error)
        return res.status(500).json({ message: 'An error occurred while signing in to your account.' })
    }
}

export { createUser, userLogin }