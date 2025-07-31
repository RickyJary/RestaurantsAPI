const Restaurant = require('../models/Restaurant.model');

module.exports.createRestaurant = async (req, res, next) => {
  try {
    const { name, description, style, location } = req.body;
    const imageUrl = req.file?.path || "";
    const newRestaurant = await Restaurant.create({ name, description, style, location, imageUrl });
    res.status(201).json(newRestaurant);
  } catch (error) {
    console.error("Error al crear restaurante:", error.message);
    res.status(500).json({ message: "Error interno", error: error.message });
  }
}

module.exports.getRestaurants = async (req, res, next) => {
  try {
    const restaurants = await Restaurant.find();
    res.status(200).json(restaurants);
  } catch (error) {
    console.error("Error al obtener restaurantes:", error.message);
    res.status(500).json({ message: "Error interno", error: error.message });
  }
}

module.exports.getRestaurantById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const restaurant = await Restaurant.findById(id);
    if (!restaurant) {
      return res.status(404).json({ message: "Restaurante no encontrado" });
    }
    res.status(200).json(restaurant);
  } catch (error) {
    console.error("Error al obtener restaurante:", error.message);
    res.status(500).json({ message: "Error interno", error: error.message });
  }
}

module.exports.updateRestaurant = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, description, style, location } = req.body;
    const updatedRestaurant = await Restaurant.findByIdAndUpdate(id, { name, description, style, location }, { new: true });
    if (!updatedRestaurant) {
      return res.status(404).json({ message: "Restaurante no encontrado" });
    }
    res.status(200).json(updatedRestaurant);
  } catch (error) {
    console.error("Error al actualizar restaurante:", error.message);
    res.status(500).json({ message: "Error interno", error: error.message });
  }
}

module.exports.deleteRestaurant = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedRestaurant = await Restaurant.findByIdAndDelete(id);
    if (!deletedRestaurant) {
      return res.status(404).json({ message: "Restaurante no encontrado" });
    }
    res.status(200).json({ message: "Restaurante eliminado" });
  } catch (error) {
    console.error("Error al eliminar restaurante:", error.message);
    res.status(500).json({ message: "Error interno", error: error.message });
  }
}