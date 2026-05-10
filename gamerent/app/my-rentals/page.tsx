"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"

export default function MyRentalsPage() {
  const [rentals, setRentals] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadRentals()
  }, [])

  async function loadRentals() {
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      alert("Вы не вошли")
      return
    }

    const { data, error } = await supabase
      .from("rentals")
      .select("*")
      .eq("user_id", user.id)

    if (error) {
      console.log(error)
    } else {
      setRentals(data || [])
    }

    setLoading(false)
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0a0a0a",
        color: "white",
        padding: 40,
      }}
    >
      <h1
        style={{
          fontSize: 40,
          fontWeight: "bold",
          marginBottom: 30,
        }}
      >
        Мои аренды
      </h1>

      {loading ? (
        <p>Загрузка...</p>
      ) : rentals.length === 0 ? (
        <p>У вас пока нет аренд</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 20,
          }}
        >
          {rentals.map((rental) => (
            <div
              key={rental.id}
              style={{
                background: "#111",
                padding: 20,
                borderRadius: 20,
                border: "1px solid #222",
              }}
            >
              <h2
                style={{
                  fontSize: 24,
                  marginBottom: 10,
                }}
              >
                {rental.game}
              </h2>

              <p>Длительность: {rental.duration}</p>

              <p>Цена: ₽{rental.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}