
import { useEffect, useState } from 'react'
import CCALogo from './CCALogo'

export default function WelcomePopup() {
  const [showWelcome, setShowWelcome] = useState(() => {
    try {
      return sessionStorage.getItem('ccaWelcomeSeen') !== 'true'
    } catch {
      return true
    }
  })

  useEffect(() => {
    if (!showWelcome) return

    // Remember that the welcome message has appeared this session.
    try {
      sessionStorage.setItem('ccaWelcomeSeen', 'true')
    } catch {
      // Continue if browser storage is unavailable.
    }

    // Close automatically after 7 seconds.
    const timer = window.setTimeout(() => {
      setShowWelcome(false)
    }, 7000)

    return () => window.clearTimeout(timer)
  }, [showWelcome])

  function closeWelcome() {
    try {
      sessionStorage.setItem('ccaWelcomeSeen', 'true')
    } catch {
      // Closing still works if browser storage is unavailable.
    }

    setShowWelcome(false)
  }

  if (!showWelcome) {
    return null
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#071a2d]/65 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-md overflow-hidden rounded-[1.5rem] bg-white shadow-2xl">

        {/* CLOSE BUTTON */}
        <button
          type="button"
          onClick={closeWelcome}
          className="absolute right-4 top-4 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-lg font-bold text-slate-600 transition hover:bg-slate-200"
          aria-label="Close welcome message"
        >
          ×
        </button>

        {/* LOGO — EXISTING DESIGN PRESERVED */}
        <div className="flex items-center justify-center bg-[#123B63] px-6 py-6">
          <div className="flex h-20 w-14 items-center justify-center rounded-xl bg-white px-2">
            <CCALogo size="lg" />
          </div>
        </div>

        {/* WELCOME MESSAGE */}
        <div className="px-7 py-7 text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#D81B60]">
            Church of Christ in Africa
          </p>

          <h1 className="heading-font mt-2 text-2xl font-bold leading-tight text-[#123B63]">
            Welcome to CCA Eldoret Area
          </h1>

          <p className="mt-1 text-xs font-semibold tracking-wider text-[#C9A227]">
            FAITH | FAMILY | PURPOSE
          </p>

          <div className="mx-auto my-5 max-w-sm border-l-4 border-[#D81B60] pl-4 text-left">
            <p className="text-sm leading-6 text-slate-600">
              “We are glad you found us. Come, connect, belong, and discover
              your purpose in God’s work.”
            </p>

            <p className="mt-3 text-xs font-bold text-[#123B63]">
              Rev. Prof. Peter Odera Ajuoga
            </p>

            <p className="text-[11px] text-slate-500">
              Area In-Charge
            </p>
          </div>

          <button
            type="button"
            onClick={closeWelcome}
            className="rounded-full bg-[#D81B60] px-6 py-2.5 text-sm font-bold text-white transition hover:bg-[#b71550]"
          >
            Enter Website
          </button>
        </div>

        {/* SEVEN-SECOND PROGRESS BAR */}
        <div className="absolute bottom-0 left-0 h-1 w-full origin-left bg-[#D81B60] [animation:welcomeTimer_7s_linear_forwards]" />
      </div>
    </div>
  )
}
