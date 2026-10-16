const mongoose = require("mongoose");
const User = require("./models/User");
const config = require("./config/config");

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "admin@sportspro.com";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "Admin1234";

const createSuperAdmin = async () => {
  try {
    await mongoose.connect(config.mongodbUri);
    console.log(`MongoDB connected: ${mongoose.connection.name}`);

    const existingSuperAdmin = await User.findOne({ role: "super_admin" });

    if (existingSuperAdmin) {
      console.log("Super admin already exists:", existingSuperAdmin.email);
      return;
    }

    const superAdmin = await User.create({
      name: "Super Administrator",
      email: ADMIN_EMAIL,
      password: ADMIN_PASSWORD,
      role: "super_admin",
    });

    console.log("Super admin created.");
    console.log("Email:", superAdmin.email);
    console.log("Password:", ADMIN_PASSWORD);
    console.log("Change this password after first login.");
  } catch (error) {
    console.error("Error creating super admin:", error.message);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
};

createSuperAdmin();
