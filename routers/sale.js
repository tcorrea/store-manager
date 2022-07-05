const express = require('express');

const router = express.Router();
const controller = require('../controllers/sale');
const middleware = require('../middlewares/sale');

router.get('/', controller.index);
router.post('/', middleware.store, controller.store);
router.get('/:id', middleware.show, controller.show);

module.exports = router;
