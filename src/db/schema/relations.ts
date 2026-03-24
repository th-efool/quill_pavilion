import { relations } from "drizzle-orm"
import { users } from "./user"
import { projects } from "./project"
import { episodes } from "./episode"
import { scenes, sceneVersions } from "./scene"

export const userRelations = relations(users,
    ({many})=>
        ({
            projects: many(projects),
        })
)

export const projectRelations = relations( projects,
    ({one , many})=>
        ({
            user: one(users,{
                fields: [projects.userId],
                references: [users.id]
            }),
            episodes: many(episodes),
        })
)

export const episodeRelations = relations(episodes, ({one, many})=> ({
    projects: one(projects, {
        fields: [episodes.projectId],
        references: [projects.id]
    }),
    scenes: many(scenes),
}))

export const sceneRelations = relations(scenes, ({one, many})=> ({
    sceneVersions: many(sceneVersions),
    episode: one(episodes, {
        fields: [scenes.id],
        references: [episodes.id]
    })
}))

export const sceneVariantRelations = relations(sceneVersions, ({one, many})=> ({
    scene: one(scenes, {
        fields: [sceneVersions.sceneId],
        references: [scenes.id]
    })
}))