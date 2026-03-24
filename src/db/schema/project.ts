import { pgTable, uuid, text, timestamp } from "drizzle-orm/pg-core"
import { users } from "./user"

export const projects = pgTable("projects", {
    id: uuid("id").primaryKey().defaultRandom(),

    userId: uuid("user_id")
        .notNull()
        .references(() => users.id, { onDelete: "cascade" }),

    title: text("title").notNull(),

    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").defaultNow(),
})