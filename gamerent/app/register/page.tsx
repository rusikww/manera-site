'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function RegisterPage() {
  const [username, setUsername] =
    useState('')

  const [email, setEmail] =
    useState('')

  const [password, setPassword] =
    useState('')

  const register = async () => {
    const { error } = await supabase.auth.signUp({
      email,
      password,

      options: {
        data: {
          username,
        },
      },
    })

    if (error) {
      alert(error.message)
      return
    }

    alert('Регистрация успешна')

    window.location.href = '/login'
  }

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">

      <div className="w-full max-w-xl bg-white/5 border border-white/10 rounded-[40px] p-10">

        <h1 className="text-5xl font-black text-center mb-10">
          Регистрация
        </h1>

        <div className="space-y-5">

          <input
            value={username}
            onChange={(e) =>
              setUsername(
                e.target.value
              )
            }
            placeholder="Логин"
            className="w-full bg-black/40 border border-white/10 rounded-3xl px-6 py-5 outline-none"
          />

          <input
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            placeholder="Email"
            className="w-full bg-black/40 border border-white/10 rounded-3xl px-6 py-5 outline-none"
          />

          <input
            type="password"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
            placeholder="Пароль"
            className="w-full bg-black/40 border border-white/10 rounded-3xl px-6 py-5 outline-none"
          />

          <button
            onClick={register}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 py-5 rounded-3xl text-2xl font-black"
          >
            Зарегистрироваться
          </button>

        </div>
      </div>
    </main>
  )
}