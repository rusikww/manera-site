"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"

export default function UpdatePasswordPage() {
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const router = useRouter()

  async function updatePassword() {
    setLoading(true)

    const { error } = await supabase.auth.updateUser({
      password,
    })

    if (error) {
      alert(error.message)
    } else {
      alert("Пароль успешно обновлен!")
      router.push("/")
    }

    setLoading(false)
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0a0a0a",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
      }}
    >
      <div
        style={{
          width: 400,
          padding: 30,
          background: "#111",
          borderRadius: 20,
          border: "1px solid #222",
        }}
      >
        <h1 style={{ fontSize: 28, marginBottom: 20 }}>
          Новый пароль
        </h1>

        <input
          type="password"
          placeholder="Введите новый пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: 14,
            borderRadius: 12,
            border: "1px solid #333",
            background: "#1a1a1a",
            color: "white",
            marginBottom: 20,
          }}
        />

        <button
          onClick={updatePassword}
          disabled={loading}
          style={{
            width: "100%",
            padding: 14,
            borderRadius: 12,
            border: "none",
            background: "#7c3aed",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          {loading ? "Сохранение..." : "Сменить пароль"}
        </button>
      </div>
    </div>
  )
}