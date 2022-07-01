const express = require('express');

const router = express.Router();
const controller = require('../controllers/product');
const middleware = require('../middlewares/product');

router.get('/', controller.index);
router.post('/', middleware.store, controller.store);
router.get('/:id', middleware.show, controller.show);

module.exports = router;
