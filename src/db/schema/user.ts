import { pgTable, uuid, text, timestamp } from "drizzle-orm/pg-core"

export const users = pgTable("users", {
    id: uuid("id").primaryKey(), // from Supabase
    email: text("email").notNull(),
    profileImage: text("profile_image"),
    createdAt: timestamp("created_at").defaultNow(),
})