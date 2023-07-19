const router = require('express').Router();
const controllers = require('../../controllers/thoughts-controller');


router.route('/').get(controllers.getAllThoughts).post(controllers.createThought);


router.route('/:id').get(controllers.getOneThought).delete(controllers.deleteThought).put(controllers.updateOneThought);


module.exports = router;