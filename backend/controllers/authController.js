import jwt from "jwt"
import User from "../models/User";
import bcrypt from "bcryptjs"

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIN: "7d"
    })
}

export const registerUser = async (req, res) => {
    try {

        const { name, email, password } = req.body;

        const userExists = await User.findOne({ email });

        if (userExists) {
            res.status(400).json({ message: "User already Exists" })
        }

        const hashedPassword = bcrypt.hash(password, 10);
        const user = await User.create({
            name,
            email,
            password: hashedPassword
        })

        res.status(200).json({
            _id: user._id,
            token: generateToken(user._id)
        })

    }
    catch (error) {
        console.log("Error in registering user", error);
        res.status(500).json({ message: "Error in Registering" })
    }
}

export const loginUser = async (req, res) => {
    try {

        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: "Please register" });
        }
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });


        res.status(200).json({
            _id: user._id,
            token: generateToken(user._id)
        })



    } catch (error) {
        console.log("Login unsuccessful", error);
        res.status(500).json({ message: "Login Unsuccessful" });
    }
}