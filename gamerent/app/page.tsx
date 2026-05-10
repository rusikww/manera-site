'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

const games = [
  {
    title: 'Sons Of The Forest',
    image:
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1326470/header.jpg',
    badge: 'HOT',
    online: '12 аккаунтов',

    prices: {
      '1ч': {
        price: '39₽',
        link:
          'https://funpay.com/lots/offer?id=68858003',
      },

      '3ч': {
        price: '79₽',
        link:
          'https://funpay.com/lots/offer?id=68858019',
      },

      '6ч': {
        price: '119₽',
        link: '#',
      },

      '12ч': {
        price: '169₽',
        link: '#',
      },

      '24ч': {
        price: '249₽',
        link: '#',
      },
    },
  },

  {
    title: 'Mimesis',
    image:
      'https://i.ytimg.com/vi/Emz5ULWN1Ug/maxresdefault.jpg',
    badge: 'NEW',
    online: '6 аккаунтов',

    prices: {
      '1ч': {
        price: '29₽',
        link: '#',
      },

      '3ч': {
        price: '69₽',
        link: '#',
      },

      '6ч': {
        price: '109₽',
        link: '#',
      },

      '12ч': {
        price: '159₽',
        link: '#',
      },

      '24ч': {
        price: '239₽',
        link: '#',
      },
    },
  },

  {
    title: 'R.E.P.O',
    image:
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3241660/header.jpg',
    badge: 'HOT',
    online: '9 аккаунтов',

    prices: {
      '1ч': {
        price: '35₽',
        link: '#',
      },

      '3ч': {
        price: '75₽',
        link: '#',
      },

      '6ч': {
        price: '115₽',
        link: '#',
      },

      '12ч': {
        price: '165₽',
        link: '#',
      },

      '24ч': {
        price: '245₽',
        link: '#',
      },
    },
  },

  {
    title: 'Phasmophobia',
    image:
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/739630/header.jpg',
    badge: 'TOP',
    online: '8 аккаунтов',

    prices: {
      '1ч': {
        price: '25₽',
        link: '#',
      },

      '3ч': {
        price: '59₽',
        link: '#',
      },

      '6ч': {
        price: '99₽',
        link: '#',
      },

      '12ч': {
        price: '149₽',
        link: '#',
      },

      '24ч': {
        price: '229₽',
        link: '#',
      },
    },
  },

  {
    title: 'YAPYAP',
    image:
      'https://i.ytimg.com/vi/bgW3BimUYVo/maxresdefault.jpg',
    badge: 'NEW',
    online: '5 аккаунтов',

    prices: {
      '1ч': {
        price: '19₽',
        link: '#',
      },

      '3ч': {
        price: '49₽',
        link: '#',
      },

      '6ч': {
        price: '79₽',
        link: '#',
      },

      '12ч': {
        price: '129₽',
        link: '#',
      },

      '24ч': {
        price: '199₽',
        link: '#',
      },
    },
  },

  {
    title: 'The Forest',
    image:
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/242760/header.jpg',
    badge: 'TOP',
    online: '14 аккаунтов',

    prices: {
      '1ч': {
        price: '25₽',
        link: '#',
      },

      '3ч': {
        price: '55₽',
        link: '#',
      },

      '6ч': {
        price: '95₽',
        link: '#',
      },

      '12ч': {
        price: '145₽',
        link: '#',
      },

      '24ч': {
        price: '219₽',
        link: '#',
      },
    },
  },

  {
    title: 'Garrys Mod',
    image:
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/4000/header.jpg',
    badge: 'HOT',
    online: '11 аккаунтов',

    prices: {
      '1ч': {
        price: '15₽',
        link: '#',
      },

      '3ч': {
        price: '39₽',
        link: '#',
      },

      '6ч': {
        price: '69₽',
        link: '#',
      },

      '12ч': {
        price: '119₽',
        link: '#',
      },

      '24ч': {
        price: '179₽',
        link: '#',
      },
    },
  },

  {
    title: 'Schedule I',
    image:
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3164500/header.jpg',
    badge: 'NEW',
    online: '4 аккаунта',

    prices: {
      '1ч': {
        price: '29₽',
        link: '#',
      },

      '3ч': {
        price: '69₽',
        link: '#',
      },

      '6ч': {
        price: '109₽',
        link: '#',
      },

      '12ч': {
        price: '159₽',
        link: '#',
      },

      '24ч': {
        price: '239₽',
        link: '#',
      },
    },
  },

  {
    title: 'BeamNG.drive',
    image:
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/284160/header.jpg',
    badge: 'TOP',
    online: '7 аккаунтов',

    prices: {
      '1ч': {
        price: '29₽',
        link: '#',
      },

      '3ч': {
        price: '69₽',
        link: '#',
      },

      '6ч': {
        price: '119₽',
        link: '#',
      },

      '12ч': {
        price: '179₽',
        link: '#',
      },

      '24ч': {
        price: '269₽',
        link: '#',
      },
    },
  },

  {
    title: 'Peak',
    image:
      'https://i.ytimg.com/vi/LzmhuvqlQ7o/maxresdefault.jpg',
    badge: 'HOT',
    online: '5 аккаунтов',

    prices: {
      '1ч': {
        price: '39₽',
        link: '#',
      },

      '3ч': {
        price: '79₽',
        link: '#',
      },

      '6ч': {
        price: '129₽',
        link: '#',
      },

      '12ч': {
        price: '189₽',
        link: '#',
      },

      '24ч': {
        price: '279₽',
        link: '#',
      },
    },
  },
]


export default function Home() {
  const [selected, setSelected] = useState<{
    game: string
    time: string
    price: string
    link: string
  } | null>(null)

  const [isRegistered, setIsRegistered] =
    useState(false)

  const [username, setUsername] =
    useState('')

  const [email, setEmail] = useState('')

  const [registerPassword, setRegisterPassword] =
    useState('')

  const [loginEmail, setLoginEmail] =
    useState('')

  const [loginPassword, setLoginPassword] =
    useState('')

  const [currentUser, setCurrentUser] =
    useState('')

  const [reviews, setReviews] = useState([
    {
      name: 'Артём',
      text: 'Аккаунт пришёл моментально.',
      stars: 5,
    },

    {
      name: 'Максим',
      text: 'Очень красивые цены и сайт.',
      stars: 5,
    },
  ])

  const [name, setName] = useState('')
  const [reviewText, setReviewText] =
    useState('')

  const [rating, setRating] = useState(5)

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession()

      if (session?.user) {
        setIsRegistered(true)

        setCurrentUser(
          session.user.user_metadata.username
        )
      }
    }

    checkUser()
  }, [])

  const register = async () => {
    if (
      !username ||
      !email ||
      !registerPassword
    ) {
      alert('Заполните поля')
      return
    }

    const { error } = await supabase.auth.signUp({
      email,
      password: registerPassword,

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
  }

  const login = async () => {
    if (!loginEmail || !loginPassword) {
      alert('Заполните поля')
      return
    }

    const { error } =
      await supabase.auth.signInWithPassword({
        email: loginEmail,
        password: loginPassword,
      })

    if (error) {
      alert(error.message)
      return
    }

    window.location.reload()
  }

  const logout = async () => {
    await supabase.auth.signOut()

    setIsRegistered(false)

    window.location.reload()
  }

  const addReview = () => {
    if (!name || !reviewText) {
      alert('Заполните поля')
      return
    }

    setReviews([
      {
        name,
        text: reviewText,
        stars: rating,
      },
      ...reviews,
    ])

    setName('')
    setReviewText('')
    setRating(5)
  }

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-black" />

        <div className="absolute top-[-200px] left-[-150px] w-[600px] h-[600px] bg-purple-700 rounded-full blur-[200px] opacity-30" />

        <div className="absolute bottom-[-200px] right-[-150px] w-[600px] h-[600px] bg-pink-600 rounded-full blur-[200px] opacity-20" />
      </div>

      <header className="sticky top-0 z-50 backdrop-blur-2xl border-b border-white/10 bg-black/30">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          <h1 className="text-4xl font-black bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
            MANERA
          </h1>

          <div className="flex gap-4 items-center">

            {isRegistered && (
              <div className="bg-black/40 border border-white/10 px-5 py-3 rounded-2xl font-bold">
                👤 {currentUser}
              </div>
            )}

            {!isRegistered ? (
  <div className="flex gap-3">

    <a
      href="/login"
      className="bg-white/10 px-6 py-3 rounded-2xl font-bold hover:bg-white/20 transition"
    >
      Войти
    </a>

    <a
      href="/register"
      className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-2xl font-bold hover:scale-105 transition"
    >
      Регистрация
    </a>

  </div>
) : (
              <button
                onClick={logout}
                className="bg-red-600 px-6 py-3 rounded-2xl font-bold hover:bg-red-500 transition"
              >
                Выйти
              </button>
            )}

          </div>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 pt-24 pb-24 text-center">

        <h1 className="text-6xl md:text-8xl font-black leading-[0.9] mb-8">
          Аренда
          <br />

          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-300 text-transparent bg-clip-text">
            Steam
          </span>

          <br />
          аккаунтов
        </h1>

        <p className="text-xl text-white/60 leading-relaxed max-w-2xl mx-auto">
          Играй в топовые игры без покупки
        </p>

      </section>

      <section className="max-w-7xl mx-auto px-6 pb-28">

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {games.map((game) => (
            <div
              key={game.title}
              className="group bg-white/5 border border-white/10 rounded-[36px] overflow-hidden backdrop-blur-2xl hover:border-purple-500/40 hover:scale-[1.02] transition duration-500 shadow-2xl"
            >

              <div className="relative overflow-hidden">

                <img
                  src={game.image}
                  alt={game.title}
                  className="h-72 w-full object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                <div className="absolute top-5 left-5 bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 rounded-2xl font-black shadow-xl">
                  {game.badge}
                </div>

                <div className="absolute bottom-5 left-5 bg-black/50 backdrop-blur-xl px-4 py-2 rounded-2xl border border-white/10 text-sm font-bold">
                  {game.online}
                </div>
              </div>

              <div className="p-7">

                <h3 className="text-4xl font-black mb-7 leading-tight">
                  {game.title}
                </h3>

                <div className="space-y-3 mb-8">

                  {Object.entries(game.prices).map(
                    ([time, data]) => (
                      <button
                        key={time}
                        onClick={() =>
                          setSelected({
                            game: game.title,
                            time,
                            price: data.price,
                            link: data.link,
                          })
                        }
                        className={`w-full flex items-center justify-between border rounded-2xl px-5 py-4 transition ${
                          selected?.game ===
                            game.title &&
                          selected?.time === time
                            ? 'bg-gradient-to-r from-purple-600 to-pink-6git --version00 border-pink-400 scale-[1.02]'
                            : 'bg-black/40 hover:bg-purple-600/20 border-white/10 hover:border-purple-500'
                        }`}
                      >
                        <span className="text-white font-semibold">
                          {time}
                        </span>

                        <span className="text-white text-xl font-black">
                          {data.price}
                        </span>
                      </button>
                    )
                  )}

                </div>

                <button
                  disabled={
                    selected?.game !== game.title
                  }
                  onClick={() => {
                    if (!selected) return

                    window.open(
                      selected.link,
                      '_blank'
                    )
                  }}
                  className={`w-full py-5 rounded-3xl text-xl font-black transition shadow-2xl ${
                    selected?.game ===
                    game.title
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:scale-[1.02]'
                      : 'bg-gray-700 cursor-not-allowed opacity-50'
                  }`}
                >
                  Купить на FunPay
                </button>

              </div>
            </div>
          ))}

        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-28">

        <h2 className="text-5xl font-black mb-12 text-center">
          Отзывы
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">

          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-[30px] p-6"
            >
              <div className="flex items-center justify-between mb-4">

                <h3 className="text-2xl font-black">
                  {review.name}
                </h3>

                <div className="text-yellow-400 text-xl">
                  {'★'.repeat(review.stars)}
                </div>

              </div>

              <p className="text-white/70 text-lg">
                {review.text}
              </p>

            </div>
          ))}

        </div>

        <div className="bg-white/5 border border-white/10 rounded-[40px] p-8">

          <h2 className="text-4xl font-black mb-8">
            Оставить отзыв
          </h2>

          <div className="flex gap-3 mb-8">

            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() =>
                  setRating(star)
                }
                className={`text-5xl ${
                  rating >= star
                    ? 'text-yellow-400'
                    : 'text-white/20'
                }`}
              >
                ★
              </button>
            ))}

          </div>

          <input
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            placeholder="Ваше имя"
            className="w-full bg-black/40 border border-white/10 rounded-3xl px-6 py-5 outline-none mb-6"
          />

          <textarea
            value={reviewText}
            onChange={(e) =>
              setReviewText(
                e.target.value
              )
            }
            placeholder="Напишите отзыв..."
            rows={5}
            className="w-full bg-black/40 border border-white/10 rounded-3xl px-6 py-5 outline-none resize-none mb-6"
          />

          <button
            onClick={addReview}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 py-5 rounded-3xl text-2xl font-black"
          >
            Отправить отзыв
          </button>

        </div>
      </section>
    </main>
  )

  
}