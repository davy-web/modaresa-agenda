const express = require("express");
const calendarSchema = require("../models/calendar");

const router = express.Router();

router.use(express.urlencoded({ extended: false }));

// Get all calendars
router.get("/get", async (req, res) => {
    await calendarSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Get a calendar
router.get("/get/:id", async (req, res) => {
    const { id } = req.params;
    await calendarSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Create calendar
router.post("/create", async (req, res) => {
    const calendar = await calendarSchema(req.body);
    calendar
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Update a calendar
router.put("/update/:id", async (req, res) => {
    const { id } = req.params;
    const { date, time, infos, duration } = req.body;
    await calendarSchema
        .updateOne({ _id: id }, { $set: { date, time, infos, duration } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Delete a calendar
router.delete("/delete/:id", async (req, res) => {
    const { id } = req.params;
    await calendarSchema
        .remove({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;