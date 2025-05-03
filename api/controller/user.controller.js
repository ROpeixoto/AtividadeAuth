import bcrypt from 'bcrypt';
import User from '../models/User.js';

const register = async (req, res) => {
    console.log("resgistering user:", req.body);

    if (!req.body.username || !req.body.password || !req.body || !req.body.email) {
        return res.status(400).json({ message: 'Username, password and e-mail are required' });
    }

    const { username, password, email } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);


    try {
        const savedUser = await User.create({
            username,
            email,
            password: hashedPassword,
        });

        console.log("saved user:", savedUser);
        return res.status(200).json({ message: 'User registered successfully' });
    }
    catch (error) {
        console.error("Error saving user:", error);
        return res.status(500).json({ message: 'Error saving user' });
    }
};
export default { register };