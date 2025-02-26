import express from "express";
import { Event, RSVP, User } from "../../models";

const router = express.Router();

router.get("/", async (_req, res) => {
  try {
    const events = await Event.findAll({
      include: [
        {
          model: RSVP,
          include: [User],
        },
      ],
    });
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: "Unable to fetch events" });
  }
});

export default router;
