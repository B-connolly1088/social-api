//bring in models
const getAllUsers = async (req, res) => {
    try {
        
        res.status(200).json("getAllUsers")
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}
const getOneUser = async (req, res) => {
    try {
        console.log(req.params.id);
        res.status(200).json("getOneUser")
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}
const createUser = async (req, res) => {
    try {
        console.log(req.body);
        res.status(200).json("createUser")
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}
const updateOneUser = async (req, res) => {
    try {
        console.log(req.params.id);
        console.log(req.body);
        res.status(200).json("updateOneUser")
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}
const deleteUser = async (req, res) => {
    try {
        console.log(req.params.id);
        res.status(200).json("deleteUser")
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}


module.exports = {getAllUsers, getOneUser, createUser, updateOneUser, deleteUser}