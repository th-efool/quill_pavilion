// app/signup/signup.tsx

"use client"

import { supabase } from "@/lib/supabase"
import { useState } from "react"

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function handleLogin() {
   //     if (!error) window.location.href = "/projects"

        console.log("CLICKED")

        try {
            const { data, error } = await supabase.auth.signUp({ email, password })

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
                    className="w-full mb-3 p-2 border"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className="w-full mb-3 p-2 border"
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="button" onClick={handleLogin} className="w-full bg-orange-500 text-white p-7">
                    SignUp
                </button>
            </div>
        </div>
    )
}