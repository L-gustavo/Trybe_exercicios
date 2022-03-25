const router = require('express').Router();
const userControl = require('../controller/user');
const { isValidate } = require('../middlewares/user');

router.post('/', isValidate, userControl.createUser);
router.get('/', isValidate, userControl.getAll);
router.get('/:id', isValidate, userControl.getById);

module.exports = router;
