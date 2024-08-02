import { sql } from "@vercel/postgres";
import { InferModel } from "drizzle-orm";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { varchar, integer, pgTable } from "drizzle-orm/pg-core";


export const pantryTrackerTable = pgTable("pantrytracker",{
    userid :varchar('userid', {length : 255}).notNull(),
    item :varchar('item', {length : 255}).notNull(),
    quantity : integer('quantity')
})


export type typeOfTable = InferModel<typeof pantryTrackerTable>

export const db = drizzle(sql);

