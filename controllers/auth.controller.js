const jwt = require("jsonwebtoken");
const createError = require("http-errors");
const User = require("../models/User.model");

module.exports.login = async (req, res, next) => {
  try {
    const { name, password } = req.body;

    const loginError = createError(401, "name or password incorrect");

    const user = await User.findOne({ name });

    if (!user) {
      return next(loginError);
    }

    const match = await user.checkPassword(password);

    if (!match) {
      return next(loginError);
    }

    const token = jwt.sign(
      { id: user.id },
      process.env.JWT_SECRET || "changeme",
      { expiresIn: "1d" }
    );

    res.status(200).json({
      accessToken: token,
      user: { id: user.id }
    });
  } catch (error) {
    next(error);
  }
};
