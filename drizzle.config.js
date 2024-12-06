import { defineConfig } from "drizzle-kit";
 
export default defineConfig({
  schema: "./configs/schema.js",
  out: "./drizzle",
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://neondb_owner:Tj5N3VFpKRUO@ep-sparkling-dream-a5j4o92s.us-east-2.aws.neon.tech/Ai-Form_builder?sslmode=require',
  }
});