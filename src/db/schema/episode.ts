import { pgTable, uuid, text, integer, timestamp } from "drizzle-orm/pg-core"
import { projects } from "./project"

export const episodes = pgTable("episodes", {
    id: uuid("id").primaryKey().defaultRandom(),

    projectId: uuid("project_id")
        .notNull()
        .references(() => projects.id, { onDelete: "cascade" }),

    title: text("title").notNull(),
    order: integer("order").notNull(),

    createdAt: timestamp("created_at").defaultNow(),
})