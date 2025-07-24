const {Router} = require('express');
const router = Router();

const {getHome} = require('../controllers/misc.controllers');
const {createRestaurant, getRestaurants, getRestaurantById, updateRestaurant, deleteRestaurant} = require('../controllers/restaurant.controllers');

/* MISC */
router.get('/', getHome);

/*

/*RESTAURANTS*/
router.post('/restaurants', createRestaurant);
router.get('/restaurants', getRestaurants);
router.get('/restaurants/:id', getRestaurantById);
router.patch('/restaurants/:id', updateRestaurant);
router.delete('/restaurants/:id', deleteRestaurant);

module.exports = router;