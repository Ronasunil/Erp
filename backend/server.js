const mongoose = require("mongoose");
const { app } = require("./app");

const startDb = async function () {
  try {
    await mongoose.connect(process.env.DATABASE);
  } catch (err) {
    console.log(err);
  }
};

startDb();

app.listen(3001, () => {
  console.log("server started");
});
