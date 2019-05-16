const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const passport = require("passport");
const users = require("./routes/api/users");
const plaid = require("./routes/api/plaid");
const path = require("path");
// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
 }

// DB Config
const mongoUri = require("./config/keys").mongoURI;

mongoose
.connect(
  mongoUri,
  { useNewUrlParser: true }
)

//
  //Set up default mongoose connection
  var mongoDB =process.env.MONGODB_URI || 'mongodb://127.0.0.1/my_database';
  mongoose.connect(mongoDB, { useNewUrlParser: true });

  //Get the default connection
  var db = mongoose.connection;

  //Bind connection to error event (to get notification of connection errors)
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//

  // Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);
app.use("/api/plaid", plaid);

app.use((req, res) =>
 res.sendFile(path.join(__dirname, "/client/build/index.html"))
);

const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`Server is doin good! ${port} !`));
