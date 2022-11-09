require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const calendarRoute = require("./routes/calendar");

const port = process.env.PORT || 80;
const app = express();

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Connected to MongoDB Atlas"))
    .catch((error) => console.error(error));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.get("/", async (req, res) => {
    res.send("API");
});

app.use("/calendars", calendarRoute);

app.listen(port, () => console.log("Server listening to", port));