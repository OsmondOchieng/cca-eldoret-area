import { useEffect, useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
} from 'react-router-dom'

import AboutPage from './pages/AboutPage'
import LeadershipPage from './pages/LeadershipPage'
import MediaPage from './pages/MediaPage'
import EventsPage from './pages/EventsPage'
import GivingPage from './pages/GivingPage'
import ContactPage from './pages/ContactPage'
import CCALogo from './components/CCALogo'

/* =========================================================
   TYPES
========================================================= */

type Leader = {
  id: string
  name: string
  role: string
  category: string
  description: string
  image?: string
}

type Pastor = {
  id: string
  name: string
  church: string
  pastorate: string
  role: string
}

type Ministry = {
  title: string
  description: string
  icon: string
}

type Church = {
  slug: string
  name: string
  pastorate: string
  location: string
  description: string
  image: string
}

/* =========================================================
   LEADERSHIP DATA
========================================================= */

const leaders: Leader[] = [
  {
    id: 'founding-father',
    name: 'Archbishop Dr. Mathews Abednego Ajuoga',
    role: 'Founding Father',
    category: 'Church Leadership',
    description:
      'The founding father whose vision, faith and service helped shape the heritage and spiritual foundation of the Church of Christ in Africa.',
    image: '/images/leadership/founding-father.jpg',
  },

  {
    id: 'archbishop',
    name: 'Archbishop',
    role: 'Archbishop',
    category: 'Church Leadership',
    description:
      'Providing spiritual leadership and direction to the wider Church of Christ in Africa.',
  },

  {
    id: 'bishop',
    name: 'Bishop',
    role: 'Bishop',
    category: 'Church Leadership',
    description:
      'Supporting the spiritual oversight, growth and mission of the church.',
  },

  {
    id: 'area-in-charge',
    name: 'Rev. Prof. Peter Odera Ajuoga',
    role: 'Area In-Charge',
    category: 'Eldoret Area Leadership',
    description:
      'Providing spiritual, pastoral and administrative leadership across the CCA Eldoret Area.',
    image: '/images/leadership/area-in-charge.jpg',
  },

  {
    id: 'min-ji',
    name: 'Min Ji',
    role: 'Wife of Area In-Charge',
    category: 'Eldoret Area Leadership',
    description:
      'Supporting the ministry, family and wider church community alongside the Area In-Charge.',
  },

  {
    id: 'assistant-kipkaren',
    name: 'Assistant Area In-Charge',
    role: 'Assistant Area In-Charge — Kipkaren Pastorate',
    category: 'Pastorate Leadership',
    description:
      'Supporting pastoral leadership and coordination within the Kipkaren Pastorate.',
  },

  {
    id: 'assistant-kingongo',
    name: "Assistant Area In-Charge — King'ong'o Pastorate",
    role: "Assistant Area In-Charge — King'ong'o Pastorate",
    category: 'Pastorate Leadership',
    description:
      "Supporting pastoral leadership and coordination within the King'ong'o Pastorate.",
  },

  {
    id: 'secretary',
    name: 'Secretary',
    role: 'Secretary',
    category: 'Administration',
    description:
      'Supporting church administration, communication, records and coordination.',
  },

  {
    id: 'treasurer',
    name: 'Treasurer',
    role: 'Treasurer',
    category: 'Administration',
    description:
      'Supporting responsible stewardship, financial administration and accountability.',
  },

  {
    id: 'women-chairlady',
    name: 'Women Chairlady',
    role: 'Women Chairlady',
    category: 'Departments',
    description:
      'Providing leadership and coordination for women within the Eldoret Area.',
  },

  {
    id: 'sunday-school',
    name: 'Sunday School Teacher',
    role: 'Sunday School Teacher',
    category: 'Departments',
    description:
      'Supporting children and young learners through Christian teaching and discipleship.',
  },

  {
    id: 'youth-chairman',
    name: 'Youth Chairman',
    role: 'Youth Chairman',
    category: 'Youth Ministry',
    description:
      'Supporting youth leadership, fellowship, discipleship and community engagement.',
  },

  {
    id: 'youth-chairlady',
    name: 'Youth Chairlady',
    role: 'Youth Chairlady',
    category: 'Youth Ministry',
    description:
      'Supporting youth leadership, fellowship, discipleship and community engagement.',
  },

  {
    id: 'ict-chairperson',
    name: 'Osmond Odera',
    role: 'ICT Chairperson',
    category: 'ICT Department',
    description:
      'Leading the church’s ICT initiatives, digital communication, website management, technology support and digital services.',
    image: '/images/leadership/ict-chairperson.jpg',
  },
]

/* =========================================================
   PASTORS
========================================================= */

const pastors: Pastor[] = [
  {
    id: 'pastor-1',
    name: 'Pastor',
    church: 'Kipkaren Church',
    pastorate: 'Kipkaren Pastorate',
    role: 'Pastor',
  },
  {
    id: 'pastor-2',
    name: 'Pastor',
    church: 'Mwangaza Church',
    pastorate: 'Kipkaren Pastorate',
    role: 'Pastor',
  },
  {
    id: 'pastor-3',
    name: 'Pastor',
    church: 'Majengo Church',
    pastorate: "King'ong'o Pastorate",
    role: 'Pastor',
  },
  {
    id: 'pastor-4',
    name: 'Pastor',
    church: "King'ong'o Church",
    pastorate: "King'ong'o Pastorate",
    role: 'Pastor',
  },
  {
    id: 'pastor-5',
    name: 'Pastor',
    church: 'Turbo Church',
    pastorate: "King'ong'o Pastorate",
    role: 'Pastor',
  },
  {
    id: 'pastor-6',
    name: 'Pastor',
    church: 'Kipkaren Church',
    pastorate: 'Kipkaren Pastorate',
    role: 'Pastor',
  },
  {
    id: 'pastor-7',
    name: 'Pastor',
    church: 'Mwangaza Church',
    pastorate: 'Kipkaren Pastorate',
    role: 'Pastor',
  },
  {
    id: 'pastor-8',
    name: 'Pastor',
    church: 'Majengo Church',
    pastorate: "King'ong'o Pastorate",
    role: 'Pastor',
  },
  {
    id: 'pastor-9',
    name: 'Pastor',
    church: "King'ong'o Church",
    pastorate: "King'ong'o Pastorate",
    role: 'Pastor',
  },
  {
    id: 'pastor-10',
    name: 'Pastor',
    church: 'Turbo Church',
    pastorate: "King'ong'o Pastorate",
    role: 'Pastor',
  },
  {
    id: 'pastor-11',
    name: 'Pastor',
    church: 'Kipkaren Church',
    pastorate: 'Kipkaren Pastorate',
    role: 'Pastor',
  },
  {
    id: 'pastor-12',
    name: 'Pastor',
    church: 'Mwangaza Church',
    pastorate: 'Kipkaren Pastorate',
    role: 'Pastor',
  },
  {
    id: 'pastor-13',
    name: 'Pastor',
    church: 'Majengo Church',
    pastorate: "King'ong'o Pastorate",
    role: 'Pastor',
  },
  {
    id: 'pastor-14',
    name: 'Pastor',
    church: "King'ong'o Church",
    pastorate: "King'ong'o Pastorate",
    role: 'Pastor',
  },
  {
    id: 'pastor-15',
    name: 'Pastor',
    church: 'Turbo Church',
    pastorate: "King'ong'o Pastorate",
    role: 'Pastor',
  },
  {
    id: 'pastor-16',
    name: 'Pastor',
    church: 'Kipkaren Church',
    pastorate: 'Kipkaren Pastorate',
    role: 'Pastor',
  },
  {
    id: 'pastor-17',
    name: 'Pastor',
    church: 'Mwangaza Church',
    pastorate: 'Kipkaren Pastorate',
    role: 'Pastor',
  },
  {
    id: 'pastor-18',
    name: 'Pastor',
    church: 'Majengo Church',
    pastorate: "King'ong'o Pastorate",
    role: 'Pastor',
  },
  {
    id: 'pastor-19',
    name: 'Pastor',
    church: "King'ong'o Church",
    pastorate: "King'ong'o Pastorate",
    role: 'Pastor',
  },
  {
    id: 'pastor-20',
    name: 'Pastor',
    church: 'Turbo Church',
    pastorate: "King'ong'o Pastorate",
    role: 'Pastor',
  },
]

/* =========================================================
   CHURCH DATA
========================================================= */

const churches: Church[] = [
  {
    slug: 'kipkaren',
    name: 'Kipkaren Church',
    pastorate: 'Kipkaren Pastorate',
    location: 'Kipkaren, Eldoret',
    description:
      'A worshipping community serving families and believers within the Kipkaren area.',
    image: '/images/churches/kipkaren.jpg',
  },
  {
    slug: 'mwangaza',
    name: 'Mwangaza Church',
    pastorate: 'Kipkaren Pastorate',
    location: 'Mwangaza, Eldoret',
    description:
      'A growing church community focused on faith, fellowship, family and service.',
    image: '/images/churches/mwangaza.jpg',
  },
  {
    slug: 'majengo',
    name: 'Majengo Church',
    pastorate: "King'ong'o Pastorate",
    location: 'Majengo, Eldoret',
    description:
      'A community of believers serving God and the surrounding neighbourhood.',
    image: '/images/churches/majengo.jpg',
  },
  {
    slug: 'kingongo',
    name: "King'ong'o Church",
    pastorate: "King'ong'o Pastorate",
    location: "King'ong'o, Eldoret",
    description:
      'A church community committed to worship, discipleship, fellowship and mission.',
    image: '/images/churches/kingongo.jpg',
  },
  {
    slug: 'turbo',
    name: 'Turbo Church',
    pastorate: "King'ong'o Pastorate",
    location: 'Turbo, Eldoret',
    description:
      'A welcoming Christian community serving God and the people of Turbo.',
    image: '/images/churches/turbo.jpg',
  },
]

/* =========================================================
   MINISTRIES
========================================================= */

const ministries: Ministry[] = [
  {
    title: 'Youth Ministry',
    description:
      'Creating space for young people to grow in faith, leadership, fellowship and purpose.',
    icon: '✦',
  },
  {
    title: 'Women Ministry',
    description:
      'Building strong Christian women through fellowship, prayer, service and discipleship.',
    icon: '♡',
  },
  {
    title: 'Sunday School',
    description:
      'Helping children discover faith and develop a strong foundation in Christ.',
    icon: '◉',
  },
  {
    title: 'Men Ministry',
    description:
      'Encouraging men to lead, serve, mentor and grow together in faith.',
    icon: '◆',
  },
  {
    title: 'ICT & Digital Ministry',
    description:
      'Using technology to strengthen communication, administration, learning and outreach.',
    icon: '⌁',
  },
  {
    title: 'Fellowship & Outreach',
    description:
      'Connecting communities through service, fellowship, evangelism and practical support.',
    icon: '∞',
  },
]

/* =========================================================
   WELCOME POPUP
========================================================= */


function WelcomePopup() {
  const [visible, setVisible] = useState(() => {
    try {
      return sessionStorage.getItem('ccaWelcomeSeen') !== 'true'
    } catch {
      return true
    }
  })

  useEffect(() => {
    if (!visible) return

    // Remember that the welcome popup has appeared
    try {
      sessionStorage.setItem('ccaWelcomeSeen', 'true')
    } catch {
      // The popup still works if browser storage is unavailable.
    }

    // Automatically close the popup after 6 seconds
    const timer = window.setTimeout(() => {
      setVisible(false)
    }, 6000)

    return () => window.clearTimeout(timer)
  }, [visible])

  if (!visible) return null

  function closeWelcome() {
    try {
      sessionStorage.setItem('ccaWelcomeSeen', 'true')
    } catch {
      // Closing the popup still works without browser storage.
    }

    setVisible(false)
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#071b2d]/70 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl">

        <button
          type="button"
          onClick={closeWelcome}
          className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-xl text-slate-700 shadow transition hover:bg-[#D81B60] hover:text-white"
          aria-label="Close welcome message"
        >
          ×
        </button>

        <div className="grid md:grid-cols-[180px_1fr]">
          <div className="relative min-h-[190px] bg-[#0c2944]">
            <img
              src="/images/leadership/area-in-charge.jpg"
              alt="Rev. Prof. Peter Odera Ajuoga, Area In-Charge"
              className="h-full w-full object-cover object-center"
            />

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#071b2d] to-transparent p-4 pt-16">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white">
                CCA Eldoret Area
              </p>
            </div>
          </div>

          <div className="p-7 md:p-9">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-[#D81B60]">
              Welcome
            </p>

            <h2 className="heading-font text-2xl font-bold text-[#123B63] md:text-3xl">
              A Welcome Message
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              “We are glad you found us. Come, connect, belong, and discover
              your purpose in God’s work.”
            </p>

            <div className="mt-5">
              <p className="font-semibold text-[#123B63]">
                Rev. Prof. Peter Odera Ajuoga
              </p>

              <p className="text-sm text-slate-500">
                Area In-Charge
              </p>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={closeWelcome}
                className="rounded-full bg-[#D81B60] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#b71550]"
              >
                Enter Website
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-1 w-full origin-left bg-[#D81B60] [animation:welcomeTimer_6s_linear_forwards]" />
      </div>
    </div>
  )
}


/* =========================================================
   NAVBAR
========================================================= */

function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    ['Home', '/'],
    ['About Us', '/about'],
    ['Leadership', '/leadership'],
    ['Churches', '/#churches'],
    ['Ministries', '/#ministries'],
    ['Media', '/media'],
    ['Events', '/events'],
    ['Give', '/give'],
    ['Contact', '/contact'],
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <CCALogo size="md" />

          <div className="leading-tight">
            <p className="text-sm font-extrabold tracking-wide text-[#123B63]">
              CCA
            </p>

            <p className="text-xs font-semibold text-slate-500">
              Eldoret Area
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex">
          {links.map(([label, href]) =>
            href.startsWith('/#') ? (
              <a
                key={href}
                href={href}
                className="text-sm font-semibold text-slate-600 transition-colors hover:text-[#D81B60]"
              >
                {label}
              </a>
            ) : (
              <Link
                key={href}
                to={href}
                className="text-sm font-semibold text-slate-600 transition-colors hover:text-[#D81B60]"
              >
                {label}
              </Link>
            ),
          )}

          <div className="ml-2 flex items-center rounded-full border border-slate-200 p-1 text-xs font-bold">
            <button
              type="button"
              className="rounded-full bg-[#123B63] px-3 py-1 text-white"
            >
              EN
            </button>

            <button
              type="button"
              className="px-2 py-1 text-slate-500 hover:text-[#D81B60]"
            >
              KIS
            </button>

            <button
              type="button"
              className="px-2 py-1 text-slate-500 hover:text-[#D81B60]"
            >
              DHOLUO
            </button>
          </div>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-xl text-[#123B63] lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? '×' : '☰'}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-100 bg-white px-5 pb-5 lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col">
            {links.map(([label, href]) =>
              href.startsWith('/#') ? (
                <a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="border-b border-slate-100 py-3 text-sm font-semibold text-slate-700"
                >
                  {label}
                </a>
              ) : (
                <Link
                  key={href}
                  to={href}
                  onClick={() => setOpen(false)}
                  className="border-b border-slate-100 py-3 text-sm font-semibold text-slate-700"
                >
                  {label}
                </Link>
              ),
            )}
          </nav>
        </div>
      )}
    </header>
  )
}

/* =========================================================
   HERO
========================================================= */

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0c2944]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(216,27,96,0.22),transparent_35%)]" />

      <div className="relative mx-auto grid min-h-[650px] max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
        <div>
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.3em] text-[#C9A227]">
            Church of Christ in Africa
          </p>

          <h1 className="heading-font max-w-3xl text-5xl font-bold leading-[1.05] text-white md:text-6xl lg:text-7xl">
            Faith.
            <br />
            Family.
            <br />
            <span className="text-[#D81B60]">Purpose.</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-200">
            Welcome to the CCA Eldoret Area — a community of faith,
            fellowship, service and purpose where people can connect, belong
            and grow together.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              to="/about"
              className="rounded-full bg-[#D81B60] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-[#b81650]"
            >
              Discover Our Story
            </Link>

            <a
              href="#churches"
              className="rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
            >
              Find a Church
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-8 text-sm text-slate-300">
            <div>
              <p className="text-2xl font-bold text-white">5</p>
              <p>Churches</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-white">2</p>
              <p>Pastorates</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-white">1</p>
              <p>United Area</p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -inset-5 rounded-[3rem] bg-[#D81B60]/10 blur-2xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#123B63] shadow-2xl">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src="/images/leadership/area-in-charge.jpg"
                alt="Rev. Prof. Peter Odera Ajuoga, Area In-Charge"
                className="h-full w-full object-contain object-center"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#071b2d] via-[#071b2d]/60 to-transparent p-7 pt-28">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A227]">
                  Eldoret Area
                </p>

                <h2 className="heading-font mt-2 text-2xl font-bold text-white">
                  Rev. Prof. Peter Odera Ajuoga
                </h2>

                <p className="mt-1 text-sm text-slate-300">
                  Area In-Charge
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* =========================================================
   ABOUT SECTION
========================================================= */

function AboutSection() {
  return (
    <section id="about" className="bg-white px-5 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#D81B60]">
            Who We Are
          </p>

          <h2 className="heading-font mt-3 text-4xl font-bold text-[#123B63] md:text-5xl">
            A church built on faith, family and purpose.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            The Church of Christ in Africa — Eldoret Area is a community of
            believers committed to worship, fellowship, discipleship, service
            and the transformation of lives through the work of God.
          </p>

          <p className="mt-5 leading-8 text-slate-600">
            Across our churches and pastorates, we seek to create a welcoming
            environment where children, youth, families and adults can grow
            together and discover their purpose.
          </p>

          <Link
            to="/about"
            className="mt-8 inline-flex rounded-full bg-[#123B63] px-7 py-3.5 text-sm font-bold text-white transition hover:bg-[#0d2c49]"
          >
            Learn More About Us
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="rounded-3xl bg-[#F7F7F5] p-7">
            <p className="text-3xl font-bold text-[#D81B60]">01</p>

            <h3 className="mt-5 text-xl font-bold text-[#123B63]">
              Worship
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Gather together in faith, praise and prayer.
            </p>
          </div>

          <div className="rounded-3xl bg-[#123B63] p-7 text-white">
            <p className="text-3xl font-bold text-[#C9A227]">02</p>

            <h3 className="mt-5 text-xl font-bold">Fellowship</h3>

            <p className="mt-3 leading-7 text-slate-300">
              Building meaningful relationships as one family.
            </p>
          </div>

          <div className="rounded-3xl bg-[#D81B60] p-7 text-white">
            <p className="text-3xl font-bold text-white/80">03</p>

            <h3 className="mt-5 text-xl font-bold">Service</h3>

            <p className="mt-3 leading-7 text-white/80">
              Using our gifts to serve God and our communities.
            </p>
          </div>

          <div className="rounded-3xl bg-[#F7F7F5] p-7">
            <p className="text-3xl font-bold text-[#C9A227]">04</p>

            <h3 className="mt-5 text-xl font-bold text-[#123B63]">
              Purpose
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Helping every generation discover its God-given purpose.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* =========================================================
   LEGACY
========================================================= */

function LegacySection() {
  return (
    <section className="bg-[#F7F7F5] px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid overflow-hidden rounded-[2rem] bg-[#0c2944] lg:grid-cols-2">
          <div className="relative min-h-[500px] overflow-hidden">
            <img
              src="/images/leadership/founding-father.jpg"
              alt="Archbishop Dr. Mathews Abednego Ajuoga"
              className="h-full w-full object-contain object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#071b2d]/80 via-transparent to-transparent" />
          </div>

          <div className="flex items-center p-8 md:p-12 lg:p-16">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C9A227]">
                Our Legacy
              </p>

              <h2 className="heading-font mt-4 text-4xl font-bold text-white md:text-5xl">
                A heritage of faith and service.
              </h2>

              <p className="mt-6 leading-8 text-slate-300">
                We honour the foundation laid by Archbishop Dr. Mathews
                Abednego Ajuoga, whose vision and service remain part of the
                heritage that continues to inspire generations.
              </p>

              <p className="mt-5 leading-8 text-slate-300">
                Today, the Eldoret Area continues that journey by strengthening
                communities, developing leaders and creating opportunities for
                people to live out their faith.
              </p>

              <Link
                to="/about"
                className="mt-7 inline-flex rounded-full bg-[#D81B60] px-6 py-3 text-sm font-bold text-white"
              >
                Discover Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* =========================================================
   CHURCHES
========================================================= */

function ChurchesSection() {
  return (
    <section id="churches" className="bg-white px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#D81B60]">
            Our Churches
          </p>

          <h2 className="heading-font mt-3 text-4xl font-bold text-[#123B63] md:text-5xl">
            Find your church community.
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            Five churches serving the Eldoret Area through two pastorates.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {churches.map((church) => (
            <Link
              key={church.slug}
              to={`/churches/${church.slug}`}
              className="group overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#123B63]">
                <img
                  src={church.image}
                  alt={church.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#071b2d]/70 to-transparent" />

                <div className="absolute bottom-4 left-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#C9A227]">
                    {church.pastorate}
                  </p>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-[#123B63]">
                  {church.name}
                </h3>

                <p className="mt-2 text-sm font-medium text-slate-500">
                  {church.location}
                </p>

                <p className="mt-4 leading-7 text-slate-600">
                  {church.description}
                </p>

                <span className="mt-5 inline-flex text-sm font-bold text-[#D81B60]">
                  Explore Church →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

/* =========================================================
   LEADERSHIP
========================================================= */

function LeaderCard({ leader }: { leader: Leader }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative flex min-h-[300px] items-center justify-center bg-[#0c2944]">
        {leader.image ? (
          <img
            src={leader.image}
            alt={leader.name}
            className="h-full max-h-[330px] w-full object-contain object-center"
          />
        ) : (
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#D81B60] text-3xl font-bold text-white">
            {leader.name.charAt(0)}
          </div>
        )}
      </div>

      <div className="p-6">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D81B60]">
          {leader.category}
        </p>

        <h3 className="mt-2 text-xl font-bold text-[#123B63]">
          {leader.name}
        </h3>

        <p className="mt-1 text-sm font-semibold text-[#C9A227]">
          {leader.role}
        </p>

        <p className="mt-4 text-sm leading-7 text-slate-600">
          {leader.description}
        </p>
      </div>
    </div>
  )
}

function LeadershipSection() {
  return (
    <section id="leadership" className="bg-[#F7F7F5] px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#D81B60]">
              Leadership
            </p>

            <h2 className="heading-font mt-3 text-4xl font-bold text-[#123B63] md:text-5xl">
              Serving with faith and purpose.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Meet the leadership serving the CCA Eldoret Area.
            </p>
          </div>

          <Link
            to="/leadership"
            className="inline-flex rounded-full bg-[#123B63] px-6 py-3 text-sm font-bold text-white"
          >
            View Leadership
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {leaders.slice(0, 6).map((leader) => (
            <LeaderCard key={leader.id} leader={leader} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* =========================================================
   MINISTRIES
========================================================= */

function MinistriesSection() {
  return (
    <section id="ministries" className="bg-white px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#D81B60]">
            Ministries
          </p>

          <h2 className="heading-font mt-3 text-4xl font-bold text-[#123B63] md:text-5xl">
            There is a place for you.
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            Discover opportunities to worship, serve, connect and grow.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {ministries.map((ministry) => (
            <div
              key={ministry.title}
              className="group rounded-3xl border border-slate-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D81B60]/10 text-2xl text-[#D81B60]">
                {ministry.icon}
              </div>

              <h3 className="mt-6 text-xl font-bold text-[#123B63]">
                {ministry.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {ministry.description}
              </p>

              <a
                href="#contact"
                className="mt-5 inline-flex text-sm font-bold text-[#D81B60]"
              >
                Get involved →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* =========================================================
   EVENTS PREVIEW
========================================================= */

function EventsSection() {
  return (
    <section id="events" className="bg-[#F7F7F5] px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#D81B60]">
              Events
            </p>

            <h2 className="heading-font mt-3 text-4xl font-bold text-[#123B63] md:text-5xl">
              What&apos;s happening.
            </h2>
          </div>

          <Link
            to="/events"
            className="inline-flex rounded-full bg-[#123B63] px-6 py-3 text-sm font-bold text-white"
          >
            View All Events
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            ['01', 'Sunday Worship', 'Every Sunday'],
            ['02', 'Prayer & Fellowship', 'Weekly'],
            ['03', 'Area Events', 'Coming Soon'],
          ].map(([number, title, date]) => (
            <Link
              key={number}
              to="/events"
              className="group rounded-3xl bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="text-sm font-bold text-[#D81B60]">
                {number}
              </span>

              <h3 className="mt-6 text-xl font-bold text-[#123B63]">
                {title}
              </h3>

              <p className="mt-2 text-sm font-semibold text-[#C9A227]">
                {date}
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                Worship, fellowship and opportunities to connect with the CCA
                family.
              </p>

              <span className="mt-5 inline-flex text-sm font-bold text-[#D81B60]">
                View Events →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

/* =========================================================
   MEDIA PREVIEW
========================================================= */

function MediaSection() {
  return (
    <section id="media" className="bg-[#123B63] px-5 py-24 text-white lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C9A227]">
            Media
          </p>

          <h2 className="heading-font mt-3 text-4xl font-bold md:text-5xl">
            Stay connected beyond Sunday.
          </h2>

          <p className="mt-6 max-w-xl leading-8 text-slate-300">
            Sermons, announcements, photographs, videos and other church
            resources will have a dedicated home here.
          </p>

          <Link
            to="/media"
            className="mt-8 inline-flex rounded-full bg-[#D81B60] px-7 py-3.5 text-sm font-bold text-white"
          >
            Visit Media Centre
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {[
            ['▶', 'Sermons'],
            ['▣', 'Gallery'],
            ['▷', 'Videos'],
          ].map(([icon, title]) => (
            <Link
              key={title}
              to="/media"
              className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center transition hover:bg-white/10"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#D81B60] text-xl">
                {icon}
              </div>

              <p className="mt-4 font-bold">{title}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

/* =========================================================
   GIVING PREVIEW
========================================================= */

function GivingSection() {
  return (
    <section id="give" className="bg-white px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-[#F7F7F5] p-8 md:p-12">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#D81B60]">
            Give
          </p>

          <h2 className="heading-font mt-3 text-4xl font-bold text-[#123B63] md:text-5xl">
            Give with purpose.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-600">
            Your generosity helps support worship, ministry, community
            programmes and the continued work of the church.
          </p>

          <Link
            to="/give"
            className="mt-8 inline-flex rounded-full bg-[#D81B60] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#D81B60]/20"
          >
            Giving Information
          </Link>
        </div>
      </div>
    </section>
  )
}

/* =========================================================
   CONTACT PREVIEW
========================================================= */

function ContactSection() {
  return (
    <section id="contact" className="bg-[#F7F7F5] px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#D81B60]">
              Contact
            </p>

            <h2 className="heading-font mt-3 text-4xl font-bold text-[#123B63] md:text-5xl">
              We would love to hear from you.
            </h2>

            <p className="mt-6 max-w-2xl leading-8 text-slate-600">
              Whether you are looking for a church, need prayer, want to serve,
              or simply want to learn more about CCA Eldoret Area, reach out to
              us.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex rounded-full bg-[#123B63] px-7 py-3.5 text-sm font-bold text-white"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}

/* =========================================================
   FOOTER
========================================================= */

function Footer() {
  return (
    <footer className="bg-[#071b2d] px-5 py-14 text-white lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Link to="/" className="inline-flex items-center gap-3">
            <CCALogo size="md" />

            <div>
              <p className="font-bold">Church of Christ in Africa</p>

              <p className="text-sm text-slate-400">
                Eldoret Area
              </p>
            </div>
          </Link>

          <p className="mt-6 max-w-md leading-7 text-slate-400">
            Faith | Family | Purpose — building a welcoming community where
            people connect, belong and discover their purpose in God’s work.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-white">Explore</h3>

          <div className="mt-4 space-y-3 text-sm text-slate-400">
            <Link className="block hover:text-white" to="/about">
              About Us
            </Link>

            <Link className="block hover:text-white" to="/leadership">
              Leadership
            </Link>

            <a className="block hover:text-white" href="#churches">
              Churches
            </a>

            <a className="block hover:text-white" href="#ministries">
              Ministries
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-white">Connect</h3>

          <div className="mt-4 space-y-3 text-sm text-slate-400">
            <Link className="block hover:text-white" to="/events">
              Events
            </Link>

            <Link className="block hover:text-white" to="/media">
              Media
            </Link>

            <Link className="block hover:text-white" to="/give">
              Give
            </Link>

            <Link className="block hover:text-white" to="/contact">
              Contact
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col justify-between gap-4 border-t border-white/10 pt-7 text-xs text-slate-500 md:flex-row">
        <p>
          © {new Date().getFullYear()} Church of Christ in Africa — Eldoret
          Area. All rights reserved.
        </p>

        <p>Faith | Family | Purpose</p>
      </div>
    </footer>
  )
}

/* =========================================================
   HOME PAGE
========================================================= */

function HomePage() {
  return (
    <>
      <WelcomePopup />

      <Navbar />

      <main>
        <Hero />

        <AboutSection />

        <LegacySection />

        <ChurchesSection />

        <LeadershipSection />

        <MinistriesSection />

        <EventsSection />

        <MediaSection />

        <GivingSection />

        <ContactSection />
      </main>

      <Footer />
    </>
  )
}

/* =========================================================
   CHURCH PAGE
========================================================= */

function ChurchPage() {
  const { slug } = useParams()

  const church = churches.find((item) => item.slug === slug)

  if (!church) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F7F7F5] px-5">
        <div className="text-center">
          <CCALogo size="lg" />

          <h1 className="heading-font mt-6 text-4xl font-bold text-[#123B63]">
            Church Not Found
          </h1>

          <p className="mt-4 text-slate-600">
            The church you are looking for could not be found.
          </p>

          <Link
            to="/"
            className="mt-7 inline-flex rounded-full bg-[#D81B60] px-7 py-3 text-sm font-bold text-white"
          >
            Return Home
          </Link>
        </div>
      </div>
    )
  }

  const churchPastors = pastors.filter(
    (pastor) => pastor.church === church.name,
  )

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <section className="bg-[#0c2944] px-5 py-20 text-white lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Link
              to="/"
              className="text-sm font-semibold text-slate-300 hover:text-white"
            >
              ← Back to CCA Eldoret Area
            </Link>

            <p className="mt-10 text-sm font-bold uppercase tracking-[0.25em] text-[#C9A227]">
              {church.pastorate}
            </p>

            <h1 className="heading-font mt-3 text-5xl font-bold md:text-6xl">
              {church.name}
            </h1>

            <p className="mt-4 text-lg text-slate-300">
              {church.location}
            </p>
          </div>
        </section>

        <section className="px-5 py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
            <div className="overflow-hidden rounded-[2rem] bg-[#0c2944]">
              <img
                src={church.image}
                alt={church.name}
                className="aspect-[16/10] w-full object-cover"
              />
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#D81B60]">
                About the Church
              </p>

              <h2 className="heading-font mt-3 text-4xl font-bold text-[#123B63]">
                Welcome to {church.name}
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                {church.description}
              </p>

              <div className="mt-8 rounded-2xl bg-[#F7F7F5] p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-[#D81B60]">
                  Pastorate
                </p>

                <p className="mt-2 font-bold text-[#123B63]">
                  {church.pastorate}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F7F7F5] px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#D81B60]">
              Church Leadership
            </p>

            <h2 className="heading-font mt-3 text-4xl font-bold text-[#123B63]">
              Pastoral Team
            </h2>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {churchPastors.slice(0, 6).map((pastor) => (
                <div
                  key={pastor.id}
                  className="rounded-3xl bg-white p-6 shadow-sm"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#123B63] text-xl font-bold text-white">
                    P
                  </div>

                  <h3 className="mt-5 font-bold text-[#123B63]">
                    {pastor.name}
                  </h3>

                  <p className="mt-1 text-sm font-semibold text-[#D81B60]">
                    {pastor.role}
                  </p>

                  <p className="mt-2 text-sm text-slate-500">
                    {pastor.pastorate}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-5xl rounded-[2rem] bg-[#123B63] p-8 text-center text-white md:p-12">
            <h2 className="heading-font text-4xl font-bold">
              You are welcome here.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
              Come, connect, belong and discover your purpose in God’s work.
            </p>

            <Link
              to="/contact"
              className="mt-7 inline-flex rounded-full bg-[#D81B60] px-7 py-3 font-bold"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

/* =========================================================
   APP ROUTES
========================================================= */

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* HOME */}
        <Route path="/" element={<HomePage />} />

        {/* MAIN PAGES */}
        <Route path="/about" element={<AboutPage />} />

        <Route path="/leadership" element={<LeadershipPage />} />

        <Route path="/media" element={<MediaPage />} />

        <Route path="/events" element={<EventsPage />} />

        <Route path="/give" element={<GivingPage />} />

        <Route path="/contact" element={<ContactPage />} />

        {/* CHURCHES */}
        <Route path="/churches/:slug" element={<ChurchPage />} />

        {/* FALLBACK */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}