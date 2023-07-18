const router = require('express').Router();
const controllers = require('../../controllers/user-controller');


router.route('/').get(controllers.getAllUsers).post(controllers.createUser);


router.route('/:id').get(controllers.getOneUser).delete(controllers.deleteUser).put(controllers.updateOneUser);


module.exports = router;
