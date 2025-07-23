const {Router} = require('express');
const router = Router();

const {getHome} = require('../controllers/misc.controllers');

/* MISC */
router.get('/', getHome);

module.exports = router;