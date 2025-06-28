import { defineConfig } from "drizzle-kit";
import * as dotenv from "dotenv";

dotenv.config({
    path: "./.env.local"
})

if(!process.env.POSTGRES_DB_URL) throw new Error("POSTGRES_DB_URL is required!")

export default defineConfig({
    dialect: "postgresql",
    schema: "./src/db/schema.ts",
    out: "./src/db/migrations",
    dbCredentials: {
        url: process.env.POSTGRES_DB_URL
    }
}) 