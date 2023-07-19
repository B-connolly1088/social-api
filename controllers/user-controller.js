const { User } = require('../models')
const getAllUsers = async (req, res) => {
    try {
        const userData = await User.find()
        res.status(200).json(userData)
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}
const getOneUser = async (req, res) => {
    try {
        const userData = await User.findById(req.params.id)
        console.log(req.params.id);
        res.status(200).json(userData)
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}
const createUser = async (req, res) => {
    try {
        const userData = await User.create(req.body)
        console.log(req.body);
        res.status(200).json(userData)
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}
const updateOneUser = async (req, res) => {
    try {
        const userData = await User.findOneAndUpdate(
            {_id: req.params.id},
            {$set: req.body},
            {new: true},
        )
        console.log(req.params.id);
        console.log(req.body);
        res.status(200).json(userData)
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}
const deleteUser = async (req, res) => {
    try {
        console.log(req.params.id);
        res.status(200).json(userData)
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}


module.exports = {getAllUsers, getOneUser, createUser, updateOneUser, deleteUser}