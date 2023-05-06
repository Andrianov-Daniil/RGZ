const Router = require('express');
const router = new Router();
const houseRouter = require('./houseRouter');
const userRouter = require('./userRouter');
const typeRouter = require('./typeRouter');

router.use('/user', userRouter);
router.use('/type', typeRouter);
router.use('/house', houseRouter);

module.exports = router;