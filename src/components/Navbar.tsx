import { useState } from 'react'
import CCALogo from './CCALogo'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navigation = [
    ['About', '#about'],
    ['Legacy', '#legacy'],
    ['Churches', '#churches'],
    ['Pastors', '#pastors'],
    ['Leadership', '/leadership'],
    ['Ministries', '#ministries'],
    ['Events', '#events'],
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 lg:px-8">

        {/* =====================================================
            CCA BRAND
            ===================================================== */}

        <a
          href="/"
          className="group flex items-center gap-3"
          aria-label="CCA Church Eldoret Area"
        >
          <div className="flex h-12 w-10 items-center justify-center">
            <CCALogo
              size="md"
              className="transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <div>
            <p className="text-sm font-black tracking-wide text-[#123B63]">
              CCA
            </p>

            <p className="text-xs text-slate-500">
              Eldoret Area
            </p>
          </div>
        </a>

        {/* =====================================================
            DESKTOP NAVIGATION
            ===================================================== */}

        <nav className="hidden items-center gap-5 lg:flex">
          {navigation.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-sm font-semibold text-slate-600 transition-colors hover:text-[#D81B60]"
            >
              {label}
            </a>
          ))}

          <a
            href="#contact"
            className="rounded-full bg-[#D81B60] px-5 py-2.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#b71550]"
          >
            Contact
          </a>
        </nav>

        {/* =====================================================
            MOBILE MENU BUTTON
            ===================================================== */}

        <button
          onClick={() => setOpen(!open)}
          className="rounded-xl border border-slate-200 px-3 py-2 text-[#123B63] transition hover:border-[#D81B60] hover:text-[#D81B60] lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* =======================================================
          MOBILE NAVIGATION
          ======================================================= */}

      {open && (
        <div className="border-t border-slate-200 bg-white px-5 py-5 shadow-lg lg:hidden">
          <nav className="flex flex-col gap-4">
            {navigation.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2 font-semibold text-slate-700 transition hover:bg-[#F7F7F5] hover:text-[#D81B60]"
              >
                {label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="rounded-xl bg-[#D81B60] px-5 py-3 text-center font-bold text-white"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}