const Router = require('express');
const router = new Router();
const houseController = require('../controllers/houseController');
const chekRole = require('../middleware/checkRoleMiddleware');

router.post('/', chekRole('ADMIN'), houseController.create);
router.get('/', houseController.getAll);
router.get('/:id', houseController.getOne);

module.exports = router;