// app/login/page.tsx

"use client"

import { supabase } from "@/lib/supabase"
import { useState } from "react"

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function handleLogin() {
        console.log("CLICKED")

        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password
            })

            console.log("RESPONSE:", { data, error })

            if (error) {
                console.error("LOGIN ERROR:", error.message)
                return
            }

            window.location.href = "/signup"
        } catch (err) {
            console.error("CRASH:", err)
        }
    }

    return (
        <div className="h-screen flex items-center justify-center">
            <div className="p-6 border rounded-xl w-80">
                <input
                    id = 'aa2xx212'
                    className="w-full mb-3 p-2 border"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    id = 'aax4x21ssa2'
                    className="w-full mb-3 p-2 border"
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button id = 'a5asxx21ssa2' type="button" onClick={handleLogin} className="w-full bg-black text-pink-200 p-5">
                    LogIn
                </button>
            </div>
        </div>
    )
}