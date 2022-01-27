
const { User } = require("../../../../models");
const validator = require("validator");

// Login - POST request
const userLogin = async (req, res) => {
    const userEmail = req.body.user_email;
    try {
        const user = await User.findOne({
            where: {
                email: req.userEmail,
            },
        });
        if (!user) {
            res.status(401).json({ message: "Incorrect username or password." });
            return;
        }
        // Check if password correct
        const validPassword = user.checkPassword(req.body.password);
        if (!validPassword) {
            res.status(400).json({ message: "Incorrect username or password." });
            return;
        }

        // Once user is logged in, set up the session variable "loggedIn", save user data in session
        req.session.save(() => {
            req.session.loggedIn = true;
            req.session.user = {}
            req.session.user.id = user.id;
            req.session.user.email = userEmail;
            return res.status(200).json({ user, message: "You are logged in!" });
        });
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ error: "Failed login." });
    }
};

// Logout - GET request
const userLogout = async (req, res) => {
    // If the user is already logged in, redirect to the homepage
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            return res.status(200).json({ data: "Sign out successful." });
        });
    } else {
        return res.status(500).json({ data: "Sign out failed." });
    }
};

// Create User - Sign Up - POST request
const userSignup = async (req, res) => {
    try {
        if (
            req.body.user_name &&
            req.body.password &&
            validator.isEmail(req.body.email) === true
        ) {
            await User.create({
                user_name: req.body.user_name,
                email: req.body.email,
                password: req.body.password,
            });
            return res.status(200).json({ data: "success" });
        }
        return res.status(400).json({ error: "Failed to create user." });
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ error: "Failed to create user." });
    }
};

// Update User - PUT request
const updateUser = async (req, res) => {
    try {
        await User.update(
            {
                user_name: req.body.name,
                email: req.body.email,
            },
            {
                where: {
                    id: req.params.id,
                },
            }
        );
        return res.status(200).json({ data: "Successfully updated user." });
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ error: "Failed to update user." });
    }
};

// Delete User - DELETE request
const deleteUser = async (req, res) => {
    try {
        await User.destroy({
            where: {
                id: req.params.id,
            },
        });
        return res.status(200).json({ data: "successfully deleted user." });
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ error: "Failed to delete user." });
    }
};

module.exports = {
    userLogin,
    userLogout,
    userSignup,
    updateUser,
    deleteUser,
};
