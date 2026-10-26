import { Link } from 'react-router-dom'
import CCALogo from '../components/CCALogo'

type Leader = {
  id: string
  name: string
  role: string
  category: string
  description: string
  image?: string
  featured?: boolean
}

const leaders: Leader[] = [
  {
    id: 'founding-father',
    name: 'Archbishop Dr. Mathews Abednego Ajuoga',
    role: 'Founding Father',
    category: 'CCA Leadership',
    description:
      'The founding father whose vision, faith and service form an important part of the heritage of the Church of Christ in Africa.',
    image: '/images/leadership/founding-father.jpg',
    featured: true,
  },

  {
    id: 'archbishop',
    name: 'Archbishop',
    role: 'Archbishop',
    category: 'CCA Leadership',
    description:
      'Providing spiritual leadership and direction within the Church of Christ in Africa.',
  },

  {
    id: 'bishop',
    name: 'Bishop',
    role: 'Bishop',
    category: 'CCA Leadership',
    description:
      'Supporting the spiritual leadership, ministry and administration of the church.',
  },

  {
    id: 'area-in-charge',
    name: 'Rev. Prof. Peter Odera Ajuoga',
    role: 'Area In-Charge',
    category: 'Eldoret Area Leadership',
    description:
      'Providing spiritual leadership, coordination and pastoral direction across the CCA Eldoret Area.',
    image: '/images/leadership/area-in-charge.jpg',
    featured: true,
  },

  {
    id: 'min-ji',
    name: 'Min Ji',
    role: 'Wife of Area In-Charge',
    category: 'Eldoret Area Leadership',
    description:
      'Supporting family, fellowship and ministry life within the Eldoret Area.',
  },

  {
    id: 'assistant-kipkaren',
    name: 'Assistant Area In-Charge',
    role: 'Assistant Area In-Charge — Kipkaren Pastorate',
    category: 'Kipkaren Pastorate',
    description:
      'Supporting pastoral coordination and ministry work within the Kipkaren Pastorate.',
  },

  {
    id: 'assistant-kingongo',
    name: "Assistant Area In-Charge — King'ong'o Pastorate",
    role: "Assistant Area In-Charge — King'ong'o Pastorate",
    category: "King'ong'o Pastorate",
    description:
      "Supporting pastoral coordination and ministry work within the King'ong'o Pastorate.",
  },

  {
    id: 'secretary',
    name: 'Secretary',
    role: 'Area Secretary',
    category: 'Administration',
    description:
      'Supporting communication, records, correspondence and administrative coordination.',
  },

  {
    id: 'treasurer',
    name: 'Treasurer',
    role: 'Area Treasurer',
    category: 'Administration',
    description:
      'Supporting financial administration, accountability and coordination.',
  },

  {
    id: 'women-chairlady',
    name: 'Women Chairlady',
    role: 'Women Ministry Chairlady',
    category: 'Women Ministry',
    description:
      'Supporting women’s fellowship, spiritual growth, participation and ministry activities.',
  },

  {
    id: 'sunday-school',
    name: 'Sunday School Teacher',
    role: 'Sunday School Teacher',
    category: 'Children Ministry',
    description:
      'Supporting Christian education and spiritual development among children.',
  },

  {
    id: 'youth-chairman',
    name: 'Youth Chairman',
    role: 'Youth Chairman',
    category: 'Youth Ministry',
    description:
      'Supporting youth fellowship, development, leadership and ministry activities.',
  },

  {
    id: 'youth-chairlady',
    name: 'Youth Chairlady',
    role: 'Youth Chairlady',
    category: 'Youth Ministry',
    description:
      'Supporting youth fellowship, development, leadership and ministry activities.',
  },

  /*
    IMPORTANT:
    ICT CHAIRPERSON REMAINS LAST.
  */

  {
    id: 'ict-chairperson',
    name: 'Osmond Odera',
    role: 'ICT Chairperson',
    category: 'ICT Department',
    description:
      'Leading the church’s ICT initiatives, digital communication, website management, technology support and digital services.',
    image: '/images/leadership/ict-chairperson.jpg',
    featured: true,
  },
]

function PhotoPlaceholder() {
  return (
    <div className="flex h-full min-h-[300px] items-center justify-center bg-[#0c2944]">
      <div className="text-center">
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-white/5">
          <span className="text-4xl text-white/70">
            👤
          </span>
        </div>

        <p className="mt-5 text-sm font-medium text-white/60">
          Photo coming soon
        </p>
      </div>
    </div>
  )
}

function LeaderPhoto({
  leader,
}: {
  leader: Leader
}) {
  if (!leader.image) {
    return <PhotoPlaceholder />
  }

  return (
    <div
      className={`relative flex min-h-[300px] items-center justify-center overflow-hidden bg-[#0c2944] ${
        leader.id === 'ict-chairperson'
          ? 'p-5'
          : leader.id === 'area-in-charge'
            ? 'p-4'
            : 'p-3'
      }`}
    >
      <img
        src={leader.image}
        alt={leader.name}
        className="h-full max-h-[360px] w-full object-contain object-center transition duration-700 group-hover:scale-[1.02]"
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#071a2d]/80 to-transparent" />
    </div>
  )
}

function LeaderCard({
  leader,
}: {
  leader: Leader
}) {
  return (
    <article
      className={`group overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-2xl ${
        leader.featured
          ? 'ring-[#123B63]/15'
          : ''
      }`}
    >
      <LeaderPhoto leader={leader} />

      <div className="p-7">

        <div className="mb-3 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#D81B60]" />

          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#D81B60]">
            {leader.category}
          </p>
        </div>

        <h2 className="heading-font text-2xl font-bold leading-tight text-[#123B63]">
          {leader.name}
        </h2>

        <p className="mt-2 text-sm font-bold text-[#D81B60]">
          {leader.role}
        </p>

        <p className="mt-5 text-sm leading-7 text-slate-600">
          {leader.description}
        </p>

        <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
            CCA Eldoret Area
          </span>

          <span className="text-lg text-[#123B63] transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </div>

      </div>
    </article>
  )
}

export default function LeadershipPage() {
  const featuredLeaders = leaders.filter(
    (leader) => leader.featured,
  )

  const otherLeaders = leaders.filter(
    (leader) => !leader.featured,
  )

  return (
    <div className="min-h-screen bg-[#F7F7F5]">

      {/* ======================================================
          TOP BAR
          ====================================================== */}

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#071a2d]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">

          <Link
            to="/"
            className="flex items-center gap-3 text-white"
          >
            <div className="flex h-12 w-9 items-center justify-center">
              <CCALogo
                size="md"
              />
            </div>

            <div>
              <p className="text-sm font-black">
                CCA
              </p>

              <p className="text-xs text-white/50">
                Eldoret Area
              </p>
            </div>
          </Link>

          <Link
            to="/"
            className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-bold text-white transition hover:border-[#D81B60] hover:bg-[#D81B60]"
          >
            ← Back Home
          </Link>

        </div>
      </header>

      {/* ======================================================
          HERO
          ====================================================== */}

      <section className="relative overflow-hidden bg-[#123B63] px-5 py-24 text-white lg:px-8">

        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#D81B60]/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">

          <div className="max-w-4xl">

            <div className="mb-7 flex items-center gap-4">

              <div className="flex h-16 w-12 items-center justify-center rounded-xl bg-white/10">
                <CCALogo
                  size="lg"
                />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#C9A227]">
                  Church Leadership
                </p>

                <p className="mt-1 text-sm text-blue-200">
                  CCA Church Eldoret Area
                </p>
              </div>

            </div>

            <h1 className="heading-font text-5xl font-bold leading-tight md:text-7xl">
              Serving with
              <span className="block text-[#D81B60]">
                Faith & Purpose
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-blue-100">
              Meet the people serving the Church of Christ in Africa through
              spiritual leadership, pastoral ministry, administration,
              fellowship and technology.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">

              <span className="rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-semibold">
                Faith
              </span>

              <span className="rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-semibold">
                Family
              </span>

              <span className="rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-semibold">
                Purpose
              </span>

            </div>

          </div>

        </div>
      </section>

      {/* ======================================================
          FEATURED LEADERS
          ====================================================== */}

      <main>

        <section className="bg-white px-5 py-20 lg:px-8">

          <div className="mx-auto max-w-7xl">

            <div className="mb-12 max-w-3xl">

              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#D81B60]">
                Our Leadership
              </p>

              <h2 className="heading-font mt-3 text-4xl font-bold text-[#123B63] md:text-5xl">
                Leadership at the heart of our church
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Our leadership structure brings together spiritual,
                pastoral, administrative, ministry and technology roles
                serving the CCA Eldoret Area.
              </p>

            </div>

            <div className="grid gap-8 lg:grid-cols-3">

              {featuredLeaders.map((leader) => (
                <LeaderCard
                  key={leader.id}
                  leader={leader}
                />
              ))}

            </div>

          </div>

        </section>

        {/* ====================================================
            OTHER LEADERS
            ==================================================== */}

        <section className="bg-[#F7F7F5] px-5 py-20 lg:px-8">

          <div className="mx-auto max-w-7xl">

            <div className="mx-auto mb-12 max-w-3xl text-center">

              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#D81B60]">
                Area Leadership
              </p>

              <h2 className="heading-font mt-3 text-4xl font-bold text-[#123B63] md:text-5xl">
                Serving across the Eldoret Area
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Leadership information will continue to be updated as
                official names, photographs and details are confirmed.
              </p>

            </div>

            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

              {otherLeaders.map((leader) => (
                <LeaderCard
                  key={leader.id}
                  leader={leader}
                />
              ))}

            </div>

          </div>

        </section>

        {/* ====================================================
            LEADERSHIP PRINCIPLE
            ==================================================== */}

        <section className="bg-[#123B63] px-5 py-20 text-white lg:px-8">

          <div className="mx-auto max-w-5xl text-center">

            <p className="text-sm font-black uppercase tracking-[0.3em] text-[#C9A227]">
              Faith • Family • Purpose
            </p>

            <h2 className="heading-font mt-5 text-4xl font-bold md:text-5xl">
              Leadership is service.
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
              We seek to build a church where every leader, ministry and
              congregation contributes to a shared culture of faith,
              fellowship, service and purpose.
            </p>

            <Link
              to="/"
              className="mt-9 inline-flex rounded-full bg-[#D81B60] px-7 py-3.5 font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#b71550]"
            >
              Explore CCA Eldoret Area
            </Link>

          </div>

        </section>

      </main>

      {/* ======================================================
          FOOTER
          ====================================================== */}

      <footer className="bg-[#071a2d] px-5 py-10 text-white lg:px-8">

        <div className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-center md:justify-between">

          <div className="flex items-center gap-3">

            <div className="flex h-12 w-9 items-center justify-center">
              <CCALogo
                size="md"
              />
            </div>

            <div>
              <p className="text-sm font-bold">
                CCA Church Eldoret Area
              </p>

              <p className="text-xs text-slate-500">
                Faith | Family | Purpose
              </p>
            </div>

          </div>

          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} CCA Church Eldoret Area.
          </p>

        </div>

      </footer>

    </div>
  )
}