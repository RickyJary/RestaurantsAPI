module.exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const loginError = createError(401, "email or password incorrect");

    const user = await User.findOne({ email });
    

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
      user: { id: user.id, role: user.role}
     });
  } catch (error) {
    next(error);
  }
};