const { Thoughts, User } = require('../models')
const getAllThoughts = async (req, res) => {
    try {
        const userData = await Thoughts.find()
        res.status(200).json(userData)
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}
const getOneThought = async (req, res) => {
    try {
        const userData = await Thoughts.findById(req.params.id)
        console.log(req.params.id);
        res.status(200).json(userData)
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}
const createThought = async (req, res) => {
    try {
        const thoughtData = await Thoughts.create(req.body)
        await User.findOneAndUpdate(
            {userName: req.body.userName},
            {$push: {thoughts: thoughtData._id}},
            {new: true},
        )
        console.log(req.body);
        res.status(200).json(thoughtData)
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}
const updateOneThought = async (req, res) => {
    try {
        const userData = await Thoughts.findOneAndUpdate(
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
const deleteThought = async (req, res) => {
    try {
        const userData = await Thoughts.findOneAndDelete({_id: req.params.id})
        console.log(req.params.id);
        res.status(200).json(userData)
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}


module.exports = {getAllThoughts, getOneThought, createThought, updateOneThought, deleteThought}