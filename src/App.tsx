import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [timeLeft, setTimeLeft] = useState('')

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date()
      const currentYear = now.getFullYear()
      const halloween = new Date(currentYear, 9, 31) // Month is 0-based
      
      if (now > halloween) {
        halloween.setFullYear(currentYear + 1)
      }

      const difference = halloween.getTime() - now.getTime()
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      return `${days}d ${hours}h ${minutes}m ${seconds}s`
    }

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="halloween-container">
      <h1>🎃 Halloween Countdown 👻</h1>
      <div className="countdown">{timeLeft}</div>
      <div className="decorations">
        <span className="ghost">👻</span>
        <span className="witch">🧙‍♀️</span>
        <span className="bat">🦇</span>
        <span className="spider">🕷️</span>
      </div>
    </div>
  )
}

export default App