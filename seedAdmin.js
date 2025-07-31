const mongoose = require("mongoose");
require("dotenv").config();
const User = require("./models/User.model");

async function createAdmin() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Conectado a MongoDB");

    const exists = await User.findOne({ name: "admin" });
    if (exists) {
      console.log("Ya existe el usuario 'admin'");
      return process.exit();
    }

    const admin = new User({
      name: "admin",
      password: "admin"
    });

    await admin.save();
    console.log("Usuario 'admin' creado correctamente");
    process.exit();
  } catch (err) {
    console.error("Error creando admin:", err);
    process.exit(1);
  }
}

createAdmin();
