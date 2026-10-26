import { Link } from 'react-router-dom'

const events = [
  {
    month: 'EVERY',
    day: 'SUN',
    title: 'Sunday Worship Service',
    category: 'Worship',
    description:
      'Come together for worship, prayer, fellowship and the sharing of God’s Word.',
    location: 'CCA Eldoret Area Churches',
  },
  {
    month: 'WEEKLY',
    day: 'PRAYER',
    title: 'Prayer & Fellowship',
    category: 'Fellowship',
    description:
      'A time for believers to come together in prayer, encouragement and fellowship.',
    location: 'Various CCA Churches',
  },
  {
    month: 'CCA',
    day: 'YOUTH',
    title: 'Youth Fellowship',
    category: 'Youth',
    description:
      'A dedicated space for young people to connect, learn, worship and grow together.',
    location: 'CCA Eldoret Area',
  },
  {
    month: 'CCA',
    day: 'WOMEN',
    title: 'Women Fellowship',
    category: 'Women',
    description:
      'Fellowship, prayer, encouragement and service among women across the area.',
    location: 'CCA Eldoret Area',
  },
  {
    month: 'CCA',
    day: 'MEN',
    title: 'Men Fellowship',
    category: 'Men',
    description:
      'A platform for men to connect, encourage one another and grow in faith and leadership.',
    location: 'CCA Eldoret Area',
  },
  {
    month: 'SOON',
    day: 'EVENT',
    title: 'Area-Wide Church Events',
    category: 'Area',
    description:
      'Conferences, special services, outreach programmes and other major CCA activities.',
    location: 'Eldoret Area',
  },
]

const categories = ['All', 'Worship', 'Fellowship', 'Youth', 'Women', 'Men', 'Area']

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0c2944] px-5 py-24 text-white lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(216,27,96,0.18),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl">
          <Link
            to="/"
            className="text-sm font-semibold text-slate-300 transition hover:text-white"
          >
            ← Back to Home
          </Link>

          <p className="mt-12 text-sm font-bold uppercase tracking-[0.3em] text-[#C9A227]">
            Events & Calendar
          </p>

          <h1 className="heading-font mt-4 max-w-4xl text-5xl font-bold leading-tight md:text-6xl">
            There is always
            <span className="text-[#D81B60]"> something happening.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            Discover worship services, fellowships, youth programmes, area
            events and opportunities to connect with the CCA family.
          </p>
        </div>
      </section>

      {/* FILTERS */}
      <section className="border-b border-slate-100 bg-white px-5 py-7 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-2">
          {categories.map((category, index) => (
            <button
              key={category}
              className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${
                index === 0
                  ? 'bg-[#123B63] text-white'
                  : 'border border-slate-200 text-slate-600 hover:border-[#D81B60] hover:text-[#D81B60]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* EVENTS */}
      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#D81B60]">
              Upcoming
            </p>

            <h2 className="heading-font mt-3 text-4xl font-bold text-[#123B63] md:text-5xl">
              Church calendar.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <article
                key={event.title}
                className="group overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="grid grid-cols-[90px_1fr] bg-[#F7F7F5]">
                  <div className="flex min-h-[120px] flex-col items-center justify-center bg-[#123B63] text-center text-white">
                    <span className="text-xs font-bold tracking-widest text-[#C9A227]">
                      {event.month}
                    </span>

                    <span className="mt-2 text-sm font-extrabold">
                      {event.day}
                    </span>
                  </div>

                  <div className="p-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-[#D81B60]">
                      {event.category}
                    </p>

                    <h3 className="mt-2 text-lg font-bold text-[#123B63]">
                      {event.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="leading-7 text-slate-600">
                    {event.description}
                  </p>

                  <div className="mt-5 border-t border-slate-100 pt-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                      Location
                    </p>

                    <p className="mt-1 text-sm font-semibold text-[#123B63]">
                      {event.location}
                    </p>
                  </div>

                  <button className="mt-6 rounded-full bg-[#D81B60] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#b81650]">
                    Event Details
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CALENDAR SYSTEM */}
      <section className="bg-[#F7F7F5] px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#D81B60]">
                Future Platform
              </p>

              <h2 className="heading-font mt-3 text-4xl font-bold text-[#123B63] md:text-5xl">
                A complete church calendar.
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                The events platform will eventually allow church
                administrators to publish events, update schedules, add
                locations, upload posters and manage registrations.
              </p>

              <div className="mt-7 space-y-4">
                {[
                  'Area-wide event calendar',
                  'Pastorate-specific events',
                  'Church-specific events',
                  'Event registration',
                  'Event reminders',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#D81B60] text-sm font-bold text-white">
                      ✓
                    </span>

                    <span className="font-semibold text-[#123B63]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] bg-[#123B63] p-8 text-white md:p-12">
              <div className="text-6xl">◷</div>

              <h3 className="heading-font mt-7 text-3xl font-bold">
                Never miss what matters.
              </h3>

              <p className="mt-4 leading-7 text-slate-300">
                Our future digital calendar will make it easier for every
                member to know what is happening across the CCA Eldoret Area.
              </p>

              <Link
                to="/contact"
                className="mt-7 inline-flex rounded-full bg-[#D81B60] px-6 py-3 text-sm font-bold"
              >
                Ask About Events
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-20 text-center lg:px-8">
        <h2 className="heading-font text-4xl font-bold text-[#123B63]">
          Come and be part of the family.
        </h2>

        <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
          Faith grows stronger when we gather, worship and serve together.
        </p>

        <Link
          to="/"
          className="mt-7 inline-flex rounded-full bg-[#123B63] px-7 py-3 text-sm font-bold text-white"
        >
          Return Home
        </Link>
      </section>
    </div>
  )
}