import bcrypt from 'bcryptjs'
import UserModel from "../models/UserModel.js"


//create user
const createUser = async (req, res) => {
    try {
        const { username, firstname, password, gender, email, approvalCode } = req.body

        if (!username || !firstname || !password || !gender || !email || !approvalCode) {
            return res.status(400).json({ message: 'All fields are required.' })
        }

        //confirm the temporary approval code
        const staffApprovalCode = '12345'
        if (approvalCode !== staffApprovalCode) {
            return res.status(400).json({ message: 'Wrong approval code. Please contact the admin.' })
        }

        //check if user exists
        const existingUser = await UserModel.findOne({ $or: [{ username }, { email }] })
        if (existingUser) {
            return res.status(409).json({ message: 'User already exists. Try another one.' })
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
        const user = await UserModel.findOne({ $or: [{ username }, { email: username }] })
        if (!user) {
            return res.status(404).json({ message: 'User does not exist' })
        }
        const checkPassword = await bcrypt.compare(password, user.password)
        if (!checkPassword) {
            return res.status(401).json({ message: 'Incorrect password.' })
        }
        const { password: _, ...userData } = user.toObject()
        res.status(200).json({ user: userData })

    } catch (error) {
        console.error('This error occurred while logging in: ', error)
        return res.status(500).json({ message: 'An error occurred while signing in to your account.' })
    }
}

//fetch user
const fetchUser = async (req, res) => {
    const { id } = req.params
    try {
        const user = await UserModel.findById(id)

        // Check if user exists
        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }
        const { password, ...userData } = user.toObject()
        res.status(200).json(userData)
    } catch (error) {
        console.error('An error occurred while fetching user: ', error)
        res.status(500).json({ message: 'Something went wrong while fetching user.' })
    }
}

//fetch users
const fetchusers = async (req, res) => {
    try {
        const users = await UserModel.find()
        res.status(200).json(users)
    } catch (error) {
        console.error('An error occurred while fetching users: ', error)
        res.status(500).json({ message: 'Something went wrong while fetching users.' })
    }
}

//delete user
const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await UserModel.findByIdAndDelete(id)
        if (!user) {
            return res.status(404).json({ message: 'User not found' })
        }
        res.status(200).json({ message: 'User deleted successfully!' })
    } catch (error) {
        console.error('Error occurred while deleting the user.')
        res.status(500).json({ message: 'Error occurred while deleting the user' })
    }
}

export { createUser, userLogin, fetchUser, fetchusers, deleteUser }