// lib/auth.ts

import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

/*
export async function getUser() {
    const supabase = createServerClient(...)

    const {
        data: { user }
    } = await supabase.auth.getUser()

    return user
}

 */