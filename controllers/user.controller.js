const User = require('../models/user.model');

const getAllUsers = async (req, res) => {
    try{
        let users = await User.find();
        res.status(200).json(users);
    } catch(err) {
        res.status(500).send(err.message);
    }
}

const getOneUser = async (req, res) => {
    try {
        let user = await User.findOne({id: req.params.id});
        res.status(200).json(user);
    } catch(err) {
        res.status(500).json(err.message);
    }
}

const createUser = async (req, res) => {
    try {
        let newUser = new User({
            name: req.body.name,
            email: req.body.email
        });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

const updateUser = async (req, res) => {
    try {
        let user = await User.findOne({_id: req.params.id});
        user.name = req.body.name;
        user.email = req.body.email;
        await user.save();
        res.status(200).json(user);
    } catch(err) {
        res.status(500).json(err.message);
    }
}

const deleteUser = async (req, res) => {
    try {
        await User.deleteOne({_id: req.params.id});
        res.status(200).send('User deleted!');
    } catch(err) {
        res.status(500).json(err.message);
    }
}

module.exports = { getAllUsers, getOneUser, createUser, updateUser, deleteUser };