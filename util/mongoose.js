const mongoose = require("mongoose");

module.exports = {
  init: () => {
    const dbOptions = {
      useNewUrlParser: true,
      autoIndex: false,
      poolSize: 5,
      connectTimeoutMS: 10000,
      family: 4,
      useUnifiedTopology: true
    };

    mongoose.connect(process.env.DATABASE_URI, dbOptions);
    mongoose.Promise = global.Promise;

    mongoose.connection.on("connected", () => {
      console.log("Mongoose connection succesfully opened.");
    });

    mongoose.connection.on("err", err => {
      console.error(`Mongoose connection error: \n ${err.stack}`);
    });

    mongoose.connection.on("disconnected", () => {
      console.log("Mongoose connection disconnected");
    });
  }
};
