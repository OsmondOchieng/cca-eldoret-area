import { Link, useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import { churches } from '../data/churches'

export default function ChurchPage() {
  const { slug } = useParams()

  const church = churches.find(
    (item) => item.slug === slug,
  )

  if (!church) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F7F7F5] px-5">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-[#D81B60]">
            CCA Eldoret Area
          </p>

          <h1 className="heading-font mt-3 text-5xl font-bold text-[#123B63]">
            Church not found
          </h1>

          <p className="mt-5 text-slate-600">
            The church page you are looking for does not exist.
          </p>

          <Link
            to="/"
            className="mt-8 inline-block rounded-full bg-[#D81B60] px-7 py-3 font-bold text-white"
          >
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F7F7F5]">
      <header className="bg-[#123B63] px-5 py-5 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link
            to="/"
            className="font-bold transition hover:text-[#C9A227]"
          >
            ← CCA Eldoret Area
          </Link>

          <span className="hidden text-sm text-blue-200 sm:block">
            Faith | Family | Purpose
          </span>
        </div>
      </header>

      <main>
        <section className="bg-[#123B63] px-5 pb-20 pt-12 text-white">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C9A227]">
              {church.pastorate}
            </p>

            <h1 className="heading-font mt-4 text-5xl font-bold md:text-7xl">
              {church.name}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100">
              {church.description}
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <div className="overflow-hidden rounded-[2rem] bg-white shadow-xl">
            <div className="h-[350px] bg-[#123B63] md:h-[500px]">
              <img
                src={church.image}
                alt={church.name}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="grid gap-5 p-7 md:grid-cols-3 md:p-10">
              <div className="rounded-2xl bg-[#F7F7F5] p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-[#D81B60]">
                  Pastorate
                </p>

                <p className="mt-2 font-bold text-[#123B63]">
                  {church.pastorate}
                </p>
              </div>

              <div className="rounded-2xl bg-[#F7F7F5] p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-[#D81B60]">
                  Location
                </p>

                <p className="mt-2 font-bold text-[#123B63]">
                  {church.location}
                </p>
              </div>

              <div className="rounded-2xl bg-[#F7F7F5] p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-[#D81B60]">
                  Services
                </p>

                <p className="mt-2 font-bold text-[#123B63]">
                  {church.serviceTime}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-12">
            <p className="text-sm font-bold uppercase tracking-widest text-[#D81B60]">
              Church Information
            </p>

            <h2 className="heading-font mt-3 text-4xl font-bold text-[#123B63]">
              Welcome to {church.name}
            </h2>

            <p className="mt-5 max-w-3xl leading-8 text-slate-600">
              This dedicated church page will become the home for official
              information about this congregation, including pastors, worship
              schedules, ministries, announcements, events, photos, sermons,
              directions and contact information.
            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 p-6">
                <p className="text-2xl">⛪</p>

                <h3 className="mt-4 font-bold text-[#123B63]">
                  Worship
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Service information coming soon.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-6">
                <p className="text-2xl">👥</p>

                <h3 className="mt-4 font-bold text-[#123B63]">
                  Pastorate
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  {church.pastorate}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-6">
                <p className="text-2xl">📍</p>

                <h3 className="mt-4 font-bold text-[#123B63]">
                  Location
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  {church.location}
                </p>
              </div>
            </div>

            <Link
              to="/"
              className="mt-10 inline-block rounded-full bg-[#D81B60] px-7 py-3 font-bold text-white transition hover:bg-[#b71550]"
            >
              ← Back to Eldoret Area
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}