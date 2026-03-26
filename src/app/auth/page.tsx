"use client"

import { supabase } from "@/lib/supabase"
import { useState } from "react"
import { FaGithub, FaSlack } from "react-icons/fa"
import { SiDiscord } from "react-icons/si"


export default function SignupPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState("")
    const [mode, setMode] = useState<"signup" | "login">("signup")

    async function handleSignup() {
        setLoading(true)
        setErrorMsg("")

        const { error } = await supabase.auth.signUp({
            email,
            password,
        })

        setLoading(false)

        if (error) {
            setErrorMsg(error.message)
            return
        }

        window.location.href = "/projects"
    }

    async function handleLogin() {
        setLoading(true)
        setErrorMsg("")

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        })

        setLoading(false)

        if (error) {
            setErrorMsg(error.message)
            return
        }

        window.location.href = "/dashboard/projects"
    }
    const origin = process.env.NEXT_PUBLIC_SITE_URL!

    async function handleOAuth(provider: "github" | "slack" | "discord") {
        const { error } = await supabase.auth.signInWithOAuth({
            provider,
            options: {
                redirectTo: `${origin}/dashboard/projects`,
            },
        })

        if (error) {
            console.error(`${provider} error:`, error.message)
        }
    }



    return (
        <div className="relative min-h-screen w-full overflow-hidden ">
        <div className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">

            {/* Background */}
            <div className="absolute inset-0 bg-black" />
            <div className="absolute inset-0 bg-[linear-gradient(140deg,rgba(139,92,246,0.15),transparent_90%)]" />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-black to-black" />
            <div className="absolute w-[600px] h-[600px] bg-purple-700/20 blur-[120px] top-[-100px] left-[-100px]" />
            <div className="absolute w-[500px] h-[500px] bg-indigo-600/20 blur-[120px] bottom-[-100px] right-[-100px]" />



            <div className="pointer-events-none absolute inset-0 overflow-hidden">

                {/* TOP BAND */}
                <div className="absolute top-[2%] md:top-[4%] lg:top-[3%]  left-0 w-screen overflow-hidden">

                    <div className="flex animate-scroll-left w-max">

                        {[...Array(20)].map((_, i) => (
                            <span
                                key={i}
                                className="text-white/20 text-xs tracking-[0.4em] px-2 whitespace-nowrap"
                            >
                            ACT — SCENE — FRAME — LIGHT — CUT —
                          </span>
                        ))}

                    </div>

                </div>

                {/* BOTTOM BAND */}
                <div className="absolute bottom-[2%] md:bottom-[6%] lg:bottom-[2%] left-0 w-screen overflow-hidden">

                    <div className="flex animate-scroll-right w-max">

                        {[...Array(20)].map((_, i) => (
                            <span
                                key={i}
                                className="text-white/20 text-xs tracking-[0.4em] px-2 whitespace-nowrap"
                            >
                            WIDE — CLOSE — TRACK — CUT —
                          </span>
                        ))}

                    </div>

                </div>

            </div>

            <div className="relative z-10 w-full max-w-5xl rounded-2xl overflow-visible border border-white/10 backdrop-blur-xl flex bg-black/40  md:right-[+20px] lg:right-[+50px] xl:right-[+80px]">

                {/* LEFT */}
                <div className="w-full lg:w-1/2 p-10 overflow-hidden">
                    <div key={mode} className="animate-auth">
                        <h1 className="text-3xl font-bold mb-2 opacity-0 animate-[authEnter_0.5s_0.05s_forwards]">
                            {mode === "signup" ? "Create your account" : "Welcome back"}
                        </h1>

                        <p className="text-gray-400 mb-6 opacity-0 animate-[authEnter_0.5s_0.1s_forwards]">
                            {mode === "signup"
                                ? "Start building cinematic stories with AI"
                                : "Continue shaping your cinematic ideas"}
                        </p>

                        {/*BUTTONS */}
                        <div className="space-y-3 mb-6 opacity-0  animate-[authEnter_0.5s_0.15s_forwards]">

                            {/* GitHub */}
                            <button
                                onClick={() => handleOAuth("github")}
                                className="relative group w-full flex items-center justify-center gap-3 py-3 rounded-lg
                                bg-white/5 border border-white/10
                                hover:bg-white/10 hover:border-white/20
                                transition-all"
                            >
                                <FaGithub className="w-5 h-5 text-white/80 group-hover:text-white" />
                                <span className="text-sm font-medium">Continue with GitHub</span>
                                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition bg-white/5 blur-xl" />
                            </button>

                            {/* Discord */}
                            <button
                                onClick={() => handleOAuth("discord")}
                                className="relative group w-full flex items-center justify-center gap-3 py-3 rounded-lg
                                bg-white/5 border border-white/10
                                hover:bg-indigo-500/10 hover:border-indigo-400/30
                                transition-all"
                            >
                                <SiDiscord className="w-5 h-5 text-indigo-300/80 group-hover:text-indigo-200" />
                                <span className="text-sm font-medium">Continue with Discord</span>
                                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition bg-indigo-500/10 blur-xl" />
                            </button>

                            {/* Slack */}
                            <button
                                onClick={() => handleOAuth("slack")}
                                className="relative group w-full flex items-center justify-center gap-3 py-3 rounded-lg
                                bg-white/5 border border-white/10
                                hover:bg-purple-500/10 hover:border-purple-400/30
                                transition-all"
                            >
                                <FaSlack className="w-5 h-5 text-purple-300/80 group-hover:text-purple-200" />
                                <span className="text-sm font-medium">Continue with Slack</span>
                                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition bg-purple-500/10 blur-xl" />
                            </button>

                        </div>

                        {/* Divider */}
                        <div className="flex items-center gap-3 my-6">
                            <div className="flex-1 h-px bg-white/10" />
                            <span className="text-xs text-gray-500">
                              OR CONTINUE WITH EMAIL
                            </span>
                            <div className="flex-1 h-px bg-white/10" />
                        </div>

                        {/* ERROR */}
                        {errorMsg && (
                            <p className="text-red-400 text-sm mb-4">{errorMsg}</p>
                        )}

                        {/* INPUTS */}
                        <div className="space-y-4">
                            <input
                                type="email"
                                placeholder="Email"
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-purple-500 focus:outline-none"
                            />

                            <input
                                type="password"
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-purple-500 focus:outline-none"
                            />

                            <button
                                onClick={mode === "signup" ? handleSignup : handleLogin}
                                disabled={loading}
                                className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-90 transition font-semibold opacity-0 animate-[authEnter_0.5s_0.25s_forwards]"
                            >
                                {loading
                                    ? mode === "signup" ? "Creating..." : "Signing in..."
                                    : mode === "signup" ? "Sign Up" : "Login"}
                            </button>
                        </div>

                        <p className="text-sm text-gray-500 mt-6 animate-[authEnter_0.5s_0.3s_forwards]">
                            {mode === "signup"
                                ? "Returning to something unfinished?"
                                : "Or begin something new."}{" "}
                            <button
                                onClick={() => setMode(mode === "signup" ? "login" : "signup")}
                                className="text-purple-400 hover:text-purple-300 transition"
                            >
                                {mode === "signup" ? "Continue" : "Create account"}
                            </button>
                        </p>
                    </div>

                </div>

                {/* RIGHT */}
                <div className="hidden lg:flex w-1/2 relative group py-8">

                    {/* EXTENSION WRAPPER */}
                    <div className="absolute inset-y-[-65px] right-[-45px] md:right-[-90px] lg:right-[-110px] xl:right-[-130px] left-0 rounded-2xl overflow-hidden">

                    {/* IMAGE LAYER */}
                        <div className="absolute inset-0 bg-cover bg-center scale-105 animate-drift">
                            <div
                                className={`absolute inset-0 bg-cover bg-center transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)]
                                ${mode === "signup" ? "opacity-100 scale-105" : "opacity-0 scale-110"}`}
                                style={{ backgroundImage: "url('/hero3.jpg')" }}
                            />

                            <div
                                className={`absolute inset-0 bg-cover bg-center transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)]
                            ${mode === "login" ? "opacity-100 scale-105" : "opacity-0 scale-110"}`}
                                style={{ backgroundImage: "url('/hero2.jpg')" }}
                            />
                        </div>

                    {/* COLOR GRADE (important for cohesion) */}
                    <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-purple-900/40 to-black/80" />

                    {/* LIGHT FOCUS (guides eye toward form) */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_22%,rgba(255,255,255,0.20),transparent_10%)] animate-light" />

                    {/* CONTENT */}
                        <div
                            key={mode}
                            className="absolute z-20 bottom-0 left-0 flex flex-col justify-end p-10 max-w-[320px] opacity-100  animate-textFloat"
                        >
                            <h2 className="text-2xl font-semibold tracking-tight text-white/90 mb-2">
                                {mode === "signup"
                                    ? "Every story starts as a fragment."
                                    : "Again, then."}
                            </h2>

                            {mode === "signup" ? (
                                <>
                                    <p className="text-gray-300 text-sm">
                                        Every story starts as fragments.
                                    </p>
                                    <p className="text-gray-300 text-sm">
                                        Lingering, then gathering form — becoming moments,
                                        becoming frames, until it learns how to exist.
                                    </p>
                                </>
                            ) : (
                                <>
                                    <p className="text-gray-300 text-sm">
                                        Same edge.
                                    </p>
                                    <p className="text-gray-300 text-sm">
                                        Same spark, finding its way back.
                                    </p>
                                </>
                            )}
                        </div>


                    </div>
                </div>

            </div>
        </div>
        </div>
    )
}