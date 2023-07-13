const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/inotebook?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"
 const connectToMongo = () => {
        mongoose
            .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
            .then(() => {
                console.log("Successfully connected to MongoDB");
            })
            .catch((error) => {
                console.error("Error connecting to MongoDB:", error);
            });
    };

module.exports = connectToMongo;