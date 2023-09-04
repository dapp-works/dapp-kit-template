/** @type {import('next').NextConfig} */

const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
});


const nextConfig = {
  //https://www.simicart.com/manifest-generator.html/
  pwa: {
    dest: 'public',
    register: true,
  }
};

module.exports = withPWA(nextConfig);