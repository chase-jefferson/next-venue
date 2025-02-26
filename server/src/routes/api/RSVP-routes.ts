import express, { Request, Response } from "express";
import { RSVP } from "../../models";

const router = express.Router();

router.post("/", async (req: Request, res: Response): Promise<Response> => {
  const { userId, eventId, status } = req.body;

  if (!userId || !eventId || !status) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  if (!['interested', 'going', 'not going'].includes(status)) {
    return res.status(400).json({ error: "Invalid status value" });
  }

  try {
    const attendee = await RSVP.create({ userId, eventId, status });
    return res.status(201).json(attendee);
  } catch (error) {
    console.error(error);  // Log the error for debugging
    return res.status(500).json({ error: "Failed to create attendee" });
  }
});

export default router;
