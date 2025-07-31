module.exports.getHome = (req, res) => {
  res.json({
    message: "API is working",
    endpoints: {
      login: "POST /login",
      getAllRestaurants: "GET /restaurants",
      getRestaurantById: "GET /restaurants/:id",
      createRestaurant: "POST /restaurants (auth)",
      updateRestaurant: "PATCH /restaurants/:id (auth)",
      deleteRestaurant: "DELETE /restaurants/:id (auth)"
    }
  });
};
