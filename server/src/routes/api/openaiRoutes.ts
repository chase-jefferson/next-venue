// import express from "express";
// import { generateEventDescription } from "./openaiService.js";
// const router = express.Router();

// /**
//  * Route to generate an event description using OpenAI.
//  */

// router.post("/generate-event-description", async (req, res) => {


//   try {
//     const { eventType, location, attendees } = req.body;
//     if (!eventType || !location || !attendees) {
//       return res.status(400).json({ error: "Missing required fields: eventType, location, attendees" });
//     }
//     const eventDescription = await generateEventDescription(req.body);
//     return res.json({ eventDescription });
//   } catch (error) {
//     console.error("Error generating event description:", error);
//     return res.status(500).json({ error: "Failed to generate event description." });
//   }
// });
// export default router;