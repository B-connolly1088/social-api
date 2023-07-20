const router = require('express').Router();
const controllers = require('../../controllers/thoughts-controller');


router.route('/').get(controllers.getAllThoughts).post(controllers.createThought);


router.route('/:id').get(controllers.getOneThought).delete(controllers.deleteThought).put(controllers.updateOneThought);

router.route('/:thoughtId/reactions').post(controllers.addReaction)

router.route('/:thoughtId/reactions/:reactionId').delete(controllers.deleteReaction)


module.exports = router;