import { pgTable, uuid, text, integer, timestamp } from "drizzle-orm/pg-core"
import { episodes } from "./episode"

export const scenes = pgTable("scenes", {
    id: uuid("id").primaryKey().defaultRandom(),

    episodeId: uuid("episode_id")
        .notNull()
        .references(() => episodes.id, { onDelete: "cascade" }),

    order: integer("order").notNull(),

    contentText: text("content_text"),
    imageUrl: text("image_url"),
    videoUrl: text("video_url"),

    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").defaultNow(),
})


export const sceneVersions = pgTable("scene_versions", {
    id: uuid("id").primaryKey().defaultRandom(),

    sceneId: uuid("scene_id")
        .notNull()
        .references(() => scenes.id, { onDelete: "cascade" }),

    contentText: text("content_text"),
    imageUrl: text("image_url"),
    videoUrl: text("video_url"),

    createdAt: timestamp("created_at").defaultNow(),
})