import { config } from "dotenv"
config();
export const port = process.env.PORT || 5000

export const db = process.env.BD

export const secretKey = process.env.secretOrPrivateKey

export const googlekey = process.env.GOOGLE_CLIENT_ID