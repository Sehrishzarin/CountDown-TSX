'use client'

import { useState, useEffect } from 'react'

export default function Component() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1)
      const diff = tomorrow.getTime() - now.getTime()

      const hours = Math.floor(diff / (1000 * 60 * 60))
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((diff % (1000 * 60)) / 1000)

      setTimeLeft({ hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-blue-500">
      <div className="text-center p-8 rounded-xl backdrop-blur-md bg-white bg-opacity-10 shadow-lg">
        <h1 className="text-4xl font-bold text-white mb-6">Time Left Until Tomorrow</h1>
        <div className="flex justify-center space-x-4">
          {['hours', 'minutes', 'seconds'].map((unit) => (
            <div key={unit} className="flex flex-col items-center">
              <div className="text-5xl font-bold text-white mb-2">
                {String(timeLeft[unit as keyof typeof timeLeft]).padStart(2, '0')}
              </div>
              <div className="text-sm uppercase text-purple-200">{unit}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}