import { config } from "dotenv"
config();
export const port = process.env.PORT || 5000

export const db = process.env.BD

export const secretKey = process.env.secretOrPrivateKey