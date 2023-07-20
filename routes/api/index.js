const router = require('express').Router();
// const courseRoutes = require('./courseRoutes');
// const studentRoutes = require('./studentRoutes');
const userRoutes = require('./user-routes');
const thoughtsRoutes = require('./thoughts-routes');

// router.use('/courses', courseRoutes);
// router.use('/students', studentRoutes);
router.use('/users', userRoutes);
router.use('/thoughts', thoughtsRoutes);

module.exports = router;