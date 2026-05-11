'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

const games = [
  {
    title: 'Sons Of The Forest',
    image:
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1326470/header.jpg',
    badge: 'HOT',
    online: '1 аккаунт',

    prices: {
      '1ч недоступен': {
        price: '1.22₽',
        link: 'EROR',
      },

      '3ч недоступен': {
        price: '79₽',
        link: '',
      },

      '6ч недоступен': {
        price: '119₽',
        link: '#',
      },

      '12ч недоступен': {
        price: '169₽',
        link: '#',
      },

      '24ч недоступен': {
        price: '249₽',
        link: '#',
      },

      '3 дня': {
        price: '399₽',
        link: '#',
      },

      '7 дней': {
        price: '699₽',
        link: '#',
      },
    },
  },

{
  title: 'Schedule I',
  image:
    'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3164500/header.jpg',
  badge: 'HOT',
  online: '1 аккаунт',

  prices: {
    '1ч': {
      price: '2.00₽',
      link: 'https://funpay.com/lots/offer?id=68809098',
    },

    '3ч': {
      price: '4.00₽',
      link: 'https://funpay.com/lots/offer?id=68809112',
    },

    '6ч': {
      price: '8.00₽',
      link: 'https://funpay.com/lots/offer?id=68809150',
    },

    '12ч': {
      price: '16.00₽',
      link: 'https://funpay.com/lots/offer?id=68809164',
    },

    '24ч': {
      price: '35.00₽',
      link: 'https://funpay.com/lots/offer?id=68809196',
    },

    '3 дня': {
      price: '35.00₽',
      link: 'https://funpay.com/lots/offer?id=68809196',
    },

    '7 дней': {
      price: '70.00₽',
      link: 'https://funpay.com/lots/offer?id=68810199',
    },
  },
},

  {
    title: 'Mimesis',
    image:
      'https://i.ytimg.com/vi/Emz5ULWN1Ug/maxresdefault.jpg',
    badge: 'NEW',
    online: '1 аккаунт',

    prices: {
      '1ч': {
        price: '1.17₽',
        link: 'https://funpay.com/lots/offer?id=68439778',
      },

      '3ч': {
        price: '1.69₽',
        link: 'https://funpay.com/lots/offer?id=68439778',
      },

      '6ч': {
        price: '3.81₽',
        link: 'https://funpay.com/lots/offer?id=68439813',
      },

      '12ч': {
        price: '5.28₽',
        link: 'https://funpay.com/lots/offer?id=68439831',
      },

      '24ч': {
        price: '9.37₽',
        link: 'https://funpay.com/lots/offer?id=68439849',
      },

      '3 дня': {
        price: '23.42₽',
        link: 'https://funpay.com/lots/offer?id=68943508',
      },
      

      '7 дней': {
        price: '66.75₽',
        link: 'https://funpay.com/lots/offer?id=68943521',
      },
    },
  },

  {
    title: 'R.E.P.O',
    image:
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3241660/header.jpg',
    badge: 'HOT',
    online: '1 аккаунт',

    prices: {
      '1ч': {
        price: '1.13₽',
        link: 'https://funpay.com/lots/offer?id=68128023',
      },

      '3ч': {
        price: '1.63₽',
        link: 'https://funpay.com/lots/offer?id=68128023',
      },

      '6ч': {
        price: '3.39₽',
        link: 'https://funpay.com/lots/offer?id=68128130',
      },

      '12ч': {
        price: '6.78₽',
        link: 'https://funpay.com/lots/offer?id=68128242',
      },

      '24ч': {
        price: '13.56₽',
        link: 'https://funpay.com/lots/offer?id=68128299',
      },

      '3 дня': {
        price: '33.91₽',
        link: 'https://funpay.com/lots/offer?id=68943785',
      },

      '7 дней': {
        price: '63.30₽',
        link: 'https://funpay.com/lots/offer?id=68943815',
      },
    },
  },

  {
    title: 'Phasmophobia',
    image:
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/739630/header.jpg',
    badge: 'TOP',
    online: '1 аккаунт',

    prices: {
      '1ч': {
        price: '1.10₽',
        link: 'https://funpay.com/lots/offer?id=68486106',
      },

      '3ч': {
        price: '1.46₽',
        link: 'https://funpay.com/lots/offer?id=68486137',
      },

      '6ч': {
        price: '3.78₽',
        link: 'https://funpay.com/lots/offer?id=68486156',
      },

      '12ч': {
        price: '5.50₽',
        link: 'https://funpay.com/lots/offer?id=68486174',
      },

      '24ч': {
        price: '11.00₽',
        link: 'https://funpay.com/lots/offer?id=68942391',
      },

      '3 дня': {
        price: '32.99₽',
        link: 'https://funpay.com/lots/offer?id=68942632',
      },

      '7 дней': {
        price: '76.99₽',
        link: 'https://funpay.com/lots/offer?id=68942684',
      },
    },
  },

  {
    title: 'The Forest',
    image:
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/242760/header.jpg',
    badge: 'TOP',
    online: '2 аккаунт',

    prices: {
      '1ч': {
        price: '1.20₽',
        link: 'https://funpay.com/lots/offer?id=68974912',
      },

      '3ч': {
        price: '2.64₽',
        link: 'https://funpay.com/lots/offer?id=68974941',
      },

      '6ч': {
        price: '4.13₽',
        link: 'https://funpay.com/lots/offer?id=68974964',
      },

      '12ч': {
        price: '6.68₽',
        link: 'https://funpay.com/lots/offer?id=68974984',
      },

      '24ч': {
        price: '9.61₽',
        link: 'https://funpay.com/lots/offer?id=68974999',
      },

      '3 дня': {
        price: '24.99₽',
        link: 'https://funpay.com/lots/offer?id=68975031',
      },

      '7 дней ': {
        price: '59.99₽',
        link: 'https://funpay.com/lots/offer?id=68975058',
      },
    },
  },

  {
    title: 'Garrys Mod',
    image:
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/4000/header.jpg',
    badge: 'HOT',
    online: '1 аккаунт',

    prices: {
      '1ч': {
        price: '1.12₽',
        link: 'https://funpay.com/lots/offer?id=68799350',
      },

      '3ч': {
        price: '1.75₽',
        link: 'https://funpay.com/lots/offer?id=68799393',
      },

      '6ч': {
        price: '4.37₽',
        link: 'https://funpay.com/lots/offer?id=68799406',
      },

      '12ч': {
        price: '5.49₽',
        link: 'https://funpay.com/lots/offer?id=68799429',
      },

      '24ч': {
        price: '7.73₽',
        link: 'https://funpay.com/lots/offer?id=68799451',
      },

      '3 дня': {
        price: '21.28₽',
        link: 'https://funpay.com/lots/offer?id=68944465',
      },

      '7 дней': {
        price: '56.01₽',
        link: 'https://funpay.com/lots/offer?id=68944499',
      },
    },
  },

  {
    title: 'BeamNG.drive',
    image:
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/284160/header.jpg',
    badge: 'TOP',
    online: '1 аккаунт',

    prices: {
      '1ч': {
        price: '1.10₽',
        link: 'https://funpay.com/lots/offer?id=68858003',
      },

      '3ч': {
        price: '3.30₽',
        link: 'https://funpay.com/lots/offer?id=68858019',
      },

      '6ч': {
        price: '6.22₽',
        link: 'https://funpay.com/lots/offer?id=68858030',
      },

      '12ч': {
        price: '12.00₽',
        link: 'https://funpay.com/lots/offer?id=68858042',
      },

      '24ч': {
        price: '24.20₽',
        link: 'https://funpay.com/lots/offer?id=68858055',
      },

      '3 дня': {
        price: '39.59₽',
        link: 'https://funpay.com/lots/offer?id=68858085',
      },

      '7 дней': {
        price: '98.98₽',
        link: 'https://funpay.com/lots/offer?id=68858104',
      },
    },
  },

  {
    title: 'Peak',
    image:
      'https://i.ytimg.com/vi/LzmhuvqlQ7o/maxresdefault.jpg',
    badge: 'HOT',
    online: '1 аккаунт',

    prices: {
      '1ч': {
        price: '1.10₽',
        link: 'https://funpay.com/lots/offer?id=68882108',
      },

      '3ч': {
        price: '1.46₽',
        link: 'https://funpay.com/lots/offer?id=68882236',
      },

      '6ч': {
        price: '3.00₽',
        link: 'https://funpay.com/lots/offer?id=68882367',
      },

      '12ч': {
        price: '6.00₽',
        link: 'https://funpay.com/lots/offer?id=68882671',
      },

      '24ч': {
        price: '12.01₽',
        link: 'https://funpay.com/lots/offer?id=68882754',
      },

      '3 дня': {
        price: '36.03₽',
        link: 'https://funpay.com/lots/offer?id=68944696',
      },

      '7 дней': {
        price: '60.49₽',
        link: 'https://funpay.com/lots/offer?id=68944714',
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

  const [reviews, setReviews] = useState<{
  name: string
  text: string
  stars: number
}[]>([])

  const [reviewText, setReviewText] =
    useState('')

  const [rating, setRating] = useState(5)
const [availableLots, setAvailableLots] = useState<{
  [key: string]: boolean | null
}>({})


useEffect(() => {
  loadReviews()
}, [])

useEffect(() => {
  // Чтение из localStorage при загрузке
  const savedLots = localStorage.getItem('availableLots')
  if (savedLots) {
    setAvailableLots(JSON.parse(savedLots))
  }

  const checkLots = async () => {
    for (const game of games) {
      for (const [time, data] of Object.entries(game.prices)) {
        const key = `${game.title}-${time}`

        // Если лот явно недоступен
        if (!data.link || data.link === '#') {
          setAvailableLots(prev => {
            const newState = { ...prev, [key]: false }
            localStorage.setItem('availableLots', JSON.stringify(newState))
            return newState
          })
          continue
        }

        // Пауза, чтобы не бить сервер одновременно
        await new Promise(r => setTimeout(r, 700))

        try {
          const res = await fetch(`/api/check-lot?url=${encodeURIComponent(data.link)}`)
          const json = await res.json()

          // Проверяем только если fetch успешный
          const available = res.ok && json.available === true

          setAvailableLots(prev => {
            const newState = { ...prev, [key]: available }
            localStorage.setItem('availableLots', JSON.stringify(newState))
            return newState
          })
        } catch {
          setAvailableLots(prev => {
            const newState = { ...prev, [key]: false }
            localStorage.setItem('availableLots', JSON.stringify(newState))
            return newState
          })
        }
      }
    }
  }

  checkLots()
}, [])

const loadReviews = async () => {
  const { data, error } = await supabase
    .from('reviews')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.log(error)
    return
  }

  const formatted = data.map((item) => ({
    name: item.username,
    text: item.message,
    stars: item.stars || 5,
  }))

  setReviews(formatted)
}
 const refreshUser = async () => {
  const { data: { session } } = await supabase.auth.getSession()

  if (session?.user) {
    const confirmed = !!session.user.email_confirmed_at
    setIsRegistered(confirmed)
    setCurrentUser(confirmed ? session.user.user_metadata.username : '')
  } else {
    setIsRegistered(false)
    setCurrentUser('')
  }
}

useEffect(() => {
  refreshUser() // проверка сразу при загрузке

  const interval = setInterval(refreshUser, 5000) // каждые 5 секунд проверка
  return () => clearInterval(interval)
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
  if (error.message.includes('rate limit')) {
    alert(
      'Слишком много попыток. Подождите пару минут.'
    )
  } else {
    alert(error.message)
  }

  return
}

  alert(
    'На вашу почту отправлено письмо для подтверждения аккаунта'
  )
}
  const login = async () => {
  if (!loginEmail || !loginPassword) {
    alert('Заполните поля')
    return
  }

  const { data, error } =
    await supabase.auth.signInWithPassword({
      email: loginEmail,
      password: loginPassword,
    })

  if (error) {
    alert(error.message)
    return
  }

  if (!data.user.email_confirmed_at) {
    alert('Подтвердите почту')
    return
  }

  window.location.reload()
}

  const logout = async () => {
    await supabase.auth.signOut()

    setIsRegistered(false)

    window.location.reload()
  }

 const addReview = async () => {
  // проверка авторизации
  if (!isRegistered) {
    alert('Войдите в аккаунт')
    return
  }

  // проверка username
  if (!currentUser) {
    alert('Заполните имя в аккаунте')
    return
  }

  // проверка текста
  if (!reviewText.trim()) {
    alert('Напишите отзыв')
    return
  }

  // проверка: оставлял ли уже отзыв
  const { data: existingReview } = await supabase
    .from('reviews')
    .select('*')
    .eq('username', currentUser)
    .single()

  if (existingReview) {
    alert('Вы уже оставляли отзыв')
    return
  }

  // добавление отзыва
  const { error } = await supabase
    .from('reviews')
    .insert([
      {
        username: currentUser,
        message: reviewText,
        stars: rating,
      },
    ])

  if (error) {
    console.log(error)
    alert('Ошибка сохранения')
    return
  }

  const newReview = {
    name: currentUser,
    text: reviewText,
    stars: rating,
  }

  setReviews([newReview, ...reviews])

  setReviewText('')
  setRating(5)

  alert('Отзыв добавлен')
}

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-black" />

        <div className="absolute top-[-200px] left-[-150px] w-[600px] h-[600px] bg-purple-700 rounded-full blur-[200px] opacity-30" />

        <div className="absolute bottom-[-200px] right-[-150px] w-[600px] h-[600px] bg-pink-600 rounded-full blur-[200px] opacity-20" />
      </div>

     <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
  <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

    <h1 className="text-4xl font-black bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
      MANERA
    </h1>

    <div className="flex gap-4 items-center">

      {isRegistered && (
        <div className="bg-black/40 border border-white/10 px-5 py-3 rounded-2xl font-bold">
          👤 {currentUser || ''}
        </div>
      )}

      {!isRegistered ? (
        <div className="flex gap-3">
          <a href="/login" className="bg-white/10 px-6 py-3 rounded-2xl font-bold hover:bg-white/20 transition">
            Войти
          </a>
          <a href="/register" className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-2xl font-bold hover:scale-105 transition">
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

   {/* Новая кнопка пожертвования */}
<a
  href="/donate"
  className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-yellow-400 to-orange-500 hover:scale-110 text-black px-6 py-4 rounded-full font-black shadow-2xl transition"
>
  💖 Поддержать
</a>
    </div>
  </div>
</header>


      <section className="max-w-7xl mx-auto px-6 pt-24 pb-24 text-center overflow-hidden">

  <h1 className="text-4xl sm:text-5xl md:text-7xl xl:text-8xl font-black leading-tight md:leading-[0.9] mb-8 break-words">
    Аренда
    <br />

    <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-300 text-transparent bg-clip-text">
      Steam
    </span>

    <br />
    аккаунтов
  </h1>

  <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl mx-auto">
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
            {Object.entries(game.prices).map(([time, data]) => (
              <button
                key={time}
                onClick={() => {
  // Блокируем выбор недоступного лота
  if (!data.link || data.link === '#' || availableLots[`${game.title}-${time}`] === false) return

  setSelected({
    game: game.title,
    time,
    price: data.price,
    link: data.link,
  })
}}
                className={`w-full flex items-center justify-between border rounded-2xl px-5 py-4 transition ${
                  selected?.game === game.title && selected?.time === time
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 border-pink-400 scale-[1.02]'
                    : 'bg-black/40 hover:bg-purple-600/20 border-white/10 hover:border-purple-500'
                }`}
              >
                <div className="flex items-center gap-2">
                 <span
  className={`w-3 h-3 rounded-full ${
    availableLots[`${game.title}-${time}`] === true
      ? 'bg-green-500'
      : availableLots[`${game.title}-${time}`] === false
      ? 'bg-red-500'
      : 'bg-yellow-400'
  }`}
/>
                  <span className="text-white font-semibold">{time}</span>
                </div>
                <span className="text-white text-xl font-black">{data.price}</span>
              </button>
            ))}
          </div>

          <button
        disabled={
  !selected || 
  selected.game !== game.title || 
  !selected.link || 
  availableLots[`${selected.game}-${selected.time}`] === false
}
            onClick={() => {
              if (!selected || !availableLots[`${selected.game}-${selected.time}`]) return
              window.open(selected.link, '_blank')
            }}
            className={`w-full py-5 rounded-3xl text-xl font-black transition shadow-2xl ${
              selected?.game === game.title && availableLots[`${game.title}-${selected?.time}`]
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:scale-[1.02]'
                : 'bg-gray-700 cursor-not-allowed opacity-50'
            }`}
          >
            Купить на FunPay
          </button>
        </div>
      </div>
    ))}
  </div> {/* <- Закрытие контейнера grid */}
</section>

      <section className="max-w-5xl mx-auto px-6 pb-28">

        <h2 className="text-5xl font-black mb-12 text-center">
          Отзывы
        </h2>

          {/* Рейтинг */}
<div className="bg-white/5 border border-white/10 rounded-[40px] p-8 mb-12">

  <div className="flex flex-col md:flex-row items-center justify-between gap-10">

    <div className="text-center md:text-left">

      <div className="text-7xl font-black bg-gradient-to-r from-yellow-300 to-yellow-500 text-transparent bg-clip-text mb-3">
        {(
          reviews.reduce(
            (acc, review) => acc + review.stars,
            0
          ) / reviews.length
        ).toFixed(1)}
      </div>

      <div className="text-yellow-400 text-3xl mb-3">
        {'★'.repeat(
          Math.round(
            reviews.reduce(
              (acc, review) =>
                acc + review.stars,
              0
            ) / reviews.length
          )
        )}
      </div>

      <p className="text-white/60 text-lg">
        Основано на {reviews.length} отзывах
      </p>

    </div>

    <div className="w-full max-w-xl space-y-4">

      {[5, 4, 3, 2, 1].map((star) => {

        const count = reviews.filter(
          (r) => r.stars === star
        ).length

        const percent =
          reviews.length > 0
            ? (count / reviews.length) * 100
            : 0

        return (
          <div
            key={star}
            className="flex items-center gap-4"
          >

            <div className="w-12 text-lg font-bold">
              {star}★
            </div>

            <div className="flex-1 h-4 bg-white/10 rounded-full overflow-hidden">

              <div
                className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-500"
                style={{
                  width: `${percent}%`,
                }}
              />

            </div>

            <div className="w-16 text-right text-white/60 font-semibold">
              {Math.round(percent)}%
            </div>

          </div>
        )
      })}

    </div>

  </div>

</div>

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
  value={isRegistered ? currentUser || '' : ''} // вместо просто currentUser
  placeholder={
    isRegistered
      ? 'Вы вошли в аккаунт'
      : 'Войдите или зарегистрируйтесь'
  }
  disabled
  className={`w-full border border-white/10 rounded-3xl px-6 py-5 outline-none mb-6 ${
    isRegistered
      ? 'bg-black/40 text-white'
      : 'bg-black/20 text-white/40 cursor-not-allowed'
  }`}
/>

<textarea
  value={reviewText || ''} // <- исправлено
  onChange={(e) => setReviewText(e.target.value)}
  placeholder={
    isRegistered
      ? 'Напишите отзыв...'
      : 'Войдите или зарегистрируйтесь'
  }
  rows={5}
  disabled={!isRegistered}
  className={`w-full border border-white/10 rounded-3xl px-6 py-5 outline-none resize-none mb-6 ${
    isRegistered
      ? 'bg-black/40 text-white'
      : 'bg-black/20 text-white/40 cursor-not-allowed'
  }`}
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