import { pgTable, serial, text } from "drizzle-orm/pg-core";

//primaryKey is important
export const todos = pgTable("todos",{
    id: serial("id").primaryKey(),
    title: text("title").notNull(),
})