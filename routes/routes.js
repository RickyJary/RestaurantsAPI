const {Router} = require('express');
const router = Router();

const {getHome} = require('../controllers/misc.controllers');
const {createRestaurant, getRestaurants, getRestaurantById, updateRestaurant, deleteRestaurant} = require('../controllers/restaurant.controllers');
const { login } = require('../controllers/auth.controller');
const { isAuthenticated } = require('../middlewares/auth.middleware');

/* MISC */
router.get('/', getHome);

/* AUTH */
router.post("login", login);

/*RESTAURANTS*/
router.post('/restaurants', isAuthenticated, upload.single("imageUrl"), createRestaurant);
router.get('/restaurants', getRestaurants);
router.get('/restaurants/:id', getRestaurantById);
router.patch('/restaurants/:id', isAuthenticated, upload.single("imageUrl"), updateRestaurant);
router.delete('/restaurants/:id', isAuthenticated, deleteRestaurant);

module.exports = router;