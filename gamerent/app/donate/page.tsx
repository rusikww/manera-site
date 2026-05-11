'use client'

import Link from 'next/link'

export default function Donate() {
  return (
    <main
  className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
  style={{
    backgroundImage: "url('ce45d00f-0b54-49b6-8707-fbf53ddd2545.png')",
  }}
>

  {/* Кнопка назад */}
  <Link
    href="/"
    className="absolute top-6 left-6 bg-black/70 hover:bg-black text-white px-6 py-3 rounded-2xl font-bold backdrop-blur-xl transition"
  >
    ← Главная
  </Link>

  <div>

      <div className="bg-black/70 rounded-3xl p-10 w-96 text-center shadow-2xl backdrop-blur-md">
        <h1 className="text-3xl font-black text-white mb-6">
          Поддержать проект 🥺
        </h1>

        <p className="text-white text-lg mb-2">
          Номер карты:
        </p>

        <p className="text-yellow-400 text-xl font-bold mb-4">
          2200 7009 5300 1871
        </p>

        <p className="text-white text-lg mb-6">
          Банк: Тинькофф
        </p>

        <button
          onClick={() => {
            navigator.clipboard.writeText('2200700953001871')
            alert('Номер карты скопирован!')
          }}
          className="bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-2 rounded-2xl font-bold transition"
        >
          Скопировать номер
        </button>
      </div>
      </div>
    </main>
  )
}