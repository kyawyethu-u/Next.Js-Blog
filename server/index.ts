import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema'; //import all schema from schema.ts


const sql = neon(process.env.DRIZZLE_DATABASE_URL!);
export const db = drizzle(sql,{schema,logger: true});//logger: true logs db req,res

