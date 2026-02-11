import { NextRequest, NextResponse } from 'next/server'
export const runtime = "nodejs"
const controller = new AbortController()
const timeout = setTimeout(() => controller.abort(), 30000)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = body

    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { message: 'Email is required' },
        { status: 400 }
      )
    }

    const response = await fetch(
      "https://chronicle-ai-back-end.onrender.com/subscribe",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
        signal: controller.signal,
      }
    )

    clearTimeout(timeout)

    const data = await response.json()

    return NextResponse.json(data, { status: response.status })

  } catch (error) {
    console.error('Subscribe error:', error)

    return NextResponse.json(
      { message: 'Something went wrong. Please try again later.' },
      { status: 500 }
    )
  }
}

// export const runtime = "nodejs"

// export async function POST() {
//   const response = await fetch("https://google.com")
//   const text = await response.text()

//   return new Response("OK")
// }
