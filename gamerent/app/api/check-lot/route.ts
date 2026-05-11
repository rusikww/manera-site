import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const url = searchParams.get('url')

  if (!url) return NextResponse.json({ available: false })

  try {
    const response = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0' },
      cache: 'no-store',
    })
    const html = await response.text()

    if (
      html.includes('404') ||
      html.includes('Лот не найден') ||
      html.includes('Предложение не найдено') ||
        html.includes('недоступно')
    ) {
      return NextResponse.json({ available: false })
    }

    return NextResponse.json({ available: true })
  } catch {
    return NextResponse.json({ available: false })
  }
}