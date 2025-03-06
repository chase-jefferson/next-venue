// import dotenv from "dotenv";
// import OpenAI from "openai";
// dotenv.config();
// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY!,
// });
// /**
//  * Generates a creative event description using OpenAI.
//  * @param eventDetails The event details object (eventType, location, etc.).
//  * @returns A promise that resolves to a generated description.
//  */
// export const generateEventDescription = async (eventDetails: any): Promise<string> => {
//   try {
//     const { eventType, location, attendees, theme, specialRequests } = eventDetails;
//     const prompt = `
//       Generate a professional and engaging description for an event:
//       - Event Type: ${eventType}
//       - Location: ${location}
//       - Number of Attendees: ${attendees}
//       - Theme: ${theme || "Not specified"}
//       - Special Requests: ${specialRequests || "None"}
//       Make it concise yet detailed, setting a good tone for potential guests.
//     `;
//     const response = await openai.chat.completions.create({
//       model: "gpt-4o",
//       messages: [{ role: "user", content: prompt }],
//       max_tokens: 200,
//     });
//     return response.choices[0]?.message?.content ?? "No response from OpenAI.";
//   } catch (error) {
//     console.error("Error generating event description:", error);
//     throw new Error("Failed to generate event description.");
//   }
// };











