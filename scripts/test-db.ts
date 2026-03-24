import "dotenv/config"

import { db } from "@/db"
import { projects, users } from "@/db/schema"

async function main() {
    const userId = "11111111-1111-1111-1111-111111111111"

    // 1. Insert user
    await db.insert(users).values({
        id: userId,
        email: "test@test.com"
    })

    console.log("User inserted")

    // 2. Insert project
    await db.insert(projects).values({
        userId,
        title: "Supabase Test Project"
    })

    console.log("Project inserted")
}

main()
    .then(() => {
        console.log("Done")
        process.exit(0)
    })
    .catch((err) => {
        console.error("Error:", err)
        process.exit(1)
    })