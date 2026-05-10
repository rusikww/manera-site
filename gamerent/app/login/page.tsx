'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] =
    useState('')

  const login = async () => {
    const { error } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      })

    if (error) {
      alert(error.message)
      return
    }

    window.location.href = '/'
  }

  const resetPassword = async () => {
    if (!email) {
      alert('Введите email')
      return
    }

    const { error } =
      await supabase.auth.resetPasswordForEmail(
        email,
        {
          redirectTo:
            'http://localhost:3000/update-password',
        }
      )

    if (error) {
      alert(error.message)
      return
    }

    alert(
      'Ссылка для восстановления отправлена на почту'
    )
  }

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">

      <div className="w-full max-w-xl bg-white/5 border border-white/10 rounded-[40px] p-10">

        <h1 className="text-5xl font-black text-center mb-10">
          Вход
        </h1>

        <div className="space-y-5">

          <input
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            placeholder="Введите email"
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
            placeholder="Введите пароль"
            className="w-full bg-black/40 border border-white/10 rounded-3xl px-6 py-5 outline-none"
          />

          <button
            onClick={login}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 py-5 rounded-3xl text-2xl font-black"
          >
            Войти
          </button>

          <button
            onClick={resetPassword}
            className="w-full bg-red-600 py-5 rounded-3xl text-xl font-black"
          >
            Забыли пароль?
          </button>

        </div>
      </div>
    </main>
  )
}