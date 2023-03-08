require("dotenv").config({ path: "api-credentials.env" });

module.exports = {
  env: {
    URI: process.env.URI,
    NAME: process.env.NAME,
    PASSWORD: process.env.PASSWORD,
    API_KEY: process.env.API_KEY,
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname:
          "blog22fb9a1d86b54586b94c3e22044b9c9a223347-dev.s3.eu-central-1.amazonaws.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};
