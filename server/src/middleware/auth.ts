<<<<<<< HEAD
import type { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
=======
import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
>>>>>>> cbdd721bbdf0a525c4fb162977e91a26df614800

interface JwtPayload {
  username: string;
}

<<<<<<< HEAD
=======
// Ensure req.user is available across the app
declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload;
    }
  }
}

>>>>>>> cbdd721bbdf0a525c4fb162977e91a26df614800
export const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction
<<<<<<< HEAD
) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];

    const secretKey = process.env.JWT_SECRET_KEY || '';

    jwt.verify(token, secretKey, (err, user) => {
      if (err) {
        return res.sendStatus(403); // Forbidden
      }

      req.user = user as JwtPayload;
      return next();
    });
  } else {
    res.sendStatus(401); // Unauthorized
  }
=======
): Response | void => {
  const authHeader = req.headers.authorization;
  console.log("Authorization Header:", authHeader); // Debugging log

  if (!authHeader) {
    return res.status(401).json({ message: "No token provided" }); // Unauthorized
  }

  // Ensure token is extracted correctly
  const token = authHeader.startsWith("Bearer ") ? authHeader.split(" ")[1] : authHeader;
  const secretKey = process.env.JWT_SECRET_KEY;

  if (!secretKey) {
    console.error("JWT Secret Key is missing!");
    return res.status(500).json({ message: "Server misconfiguration" }); // Internal Server Error
  }

  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      console.error("JWT Verification Error:", err.message);
      return res.status(403).json({ message: "Invalid or expired token" }); // Forbidden
    }

    req.user = user as JwtPayload;
    return next();
  });
>>>>>>> cbdd721bbdf0a525c4fb162977e91a26df614800
};
