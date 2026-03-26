import { NextResponse } from "next/server"

export async function GET(req: Request) {
    const origin = process.env.NEXT_PUBLIC_SITE_URL!

    return NextResponse.redirect(`${origin}/dashboard/projects`)
}