// lib/supabase.ts

import { createBrowserClient } from "@supabase/ssr"
console.log(process.env.NEXT_PUBLIC_SUPABASE_URL)

export const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)