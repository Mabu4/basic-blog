require("dotenv").config({ path: "mongodb.env" });

module.exports = {
  env: {
    MONGODB_URI: process.env.MONGODB_URI,
    MONGODB_NAME: process.env.MONGODB_NAME,
    MONGODB_PASSWORD: process.env.MONGODB_PASSWORD,
  },
  reactStrictMode: true,
};
