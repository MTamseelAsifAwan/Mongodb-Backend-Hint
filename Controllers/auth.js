import joi from 'joi';
import { User } from '../Models/uers.js';
import bcrypt from 'bcryptjs';
import { response } from 'express';

const authcontroller = {
    async registerauth(req, res) {
        const userregisterschema = joi.object({
            username: joi.string().min(5).max(30).required(),
            password: joi.string().min(5).max(30).required(),
            confirmpassword: joi.string().valid(joi.ref('password')).required(),
            email: joi.string().email().required()
        });

        const { error } = userregisterschema.validate(req.body);
        if (error) return res.status(400).send(error.details[0].message);

        const { username, password, email } = req.body;
        try {
            const usernameinuse = await User.exists({ username });
            const emailinuse = await User.exists({ email });

            if (usernameinuse) {
                return res.status(400).send("Username already in use");
            }
            if (emailinuse) {
                return res.status(400).send("Email already in use");
            }

            const hashpassword = await bcrypt.hash(password, 10);
            const usertoregister = new User({
                username,
                password: hashpassword,
                email
            });
            const user = await usertoregister.save();
            return res.status(201).json(user);
        } catch (error) {
            console.log("Server Failed", error);
            return res.status(500).send("Internal Server Error");
        }
    },

    async user_login(req, res) {
        const userloginschema = joi.object({
            username: joi.string().min(5).max(30).required(),
            password: joi.string().min(5).max(30).required()
        });

        const { error } = userloginschema.validate(req.body);
        if (error) return res.status(400).send(error.details[0].message);

        const { username, password } = req.body;
        try {
            const user = await User.findOne({ username });
            if (!user) return res.status(400).send('Invalid username');

            const validpassword = await bcrypt.compare(password, user.password);
            if (!validpassword) return res.status(400).send('Invalid password');

            return res.status(200).json({ user });
        } catch (error) {
            console.log("Server Failed", error);
            return res.status(500).send("Internal Server Error");
        }
    }
};

export default authcontroller;
