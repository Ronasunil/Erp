/** @type {import('jest').Config} */
const config = {
  testEnvironment: "node",
  verbose: true,
  testMatch: ["**/__test__/**.js"],
  moduleFileExtensions: ["js"],
  setupFilesAfterEnv: ["./setup/setup.js"],
};

module.exports = config;
