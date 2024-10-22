import { defineConfig } from 'drizzle-kit';
import * as dotenv from 'dotenv'; //env settup for drizzle.config.ts  to be accessable .env.local values


dotenv.config({
    path: ".env.local"
})

export default defineConfig({
  schema: './server/schema.ts',
  out: './server/migrations',
  dialect: 'postgresql', // 'postgresql' | 'mysql' | 'sqlite'
  dbCredentials: {
   url : process.env.DRIZZLE_DATABASE_URL!,
  },
});