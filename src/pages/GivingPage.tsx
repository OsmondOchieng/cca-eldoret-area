import { Link } from 'react-router-dom'

const givingWays = [
  {
    number: '01',
    title: 'Tithe',
    description:
      'Support the work of God through faithful giving and stewardship.',
  },
  {
    number: '02',
    title: 'Offering',
    description:
      'Give freely as an expression of worship, gratitude and thanksgiving.',
  },
  {
    number: '03',
    title: 'Special Projects',
    description:
      'Support specific church projects, programmes and community initiatives.',
  },
  {
    number: '04',
    title: 'Mission & Outreach',
    description:
      'Help extend the church’s ministry and service into the wider community.',
  },
]

export default function GivingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0c2944] px-5 py-24 text-white lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(216,27,96,0.20),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl">
          <Link
            to="/"
            className="text-sm font-semibold text-slate-300 transition hover:text-white"
          >
            ← Back to Home
          </Link>

          <p className="mt-12 text-sm font-bold uppercase tracking-[0.3em] text-[#C9A227]">
            Giving
          </p>

          <h1 className="heading-font mt-4 max-w-4xl text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
            Give with
            <span className="text-[#D81B60]"> purpose.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            Generosity helps strengthen worship, ministry, discipleship,
            community service and the work of the church.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#D81B60]">
            Stewardship
          </p>

          <h2 className="heading-font mt-3 text-4xl font-bold text-[#123B63] md:text-5xl">
            Every contribution can make a difference.
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Giving is an opportunity to participate in the work of the church
            and support ministry across the CCA Eldoret Area.
          </p>
        </div>
      </section>

      {/* WAYS TO GIVE */}
      <section className="bg-[#F7F7F5] px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#D81B60]">
              Ways to Give
            </p>

            <h2 className="heading-font mt-3 text-4xl font-bold text-[#123B63] md:text-5xl">
              Support the work.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {givingWays.map((item) => (
              <div
                key={item.number}
                className="rounded-3xl bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-3xl font-bold text-[#D81B60]">
                  {item.number}
                </span>

                <h3 className="mt-6 text-xl font-bold text-[#123B63]">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GIVING DETAILS */}
      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-[#123B63] text-white">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 md:p-12 lg:p-14">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C9A227]">
                Giving Information
              </p>

              <h2 className="heading-font mt-4 text-4xl font-bold">
                Giving made simple.
              </h2>

              <p className="mt-5 leading-8 text-slate-300">
                Official giving channels and payment information will be
                published here once confirmed by the CCA Eldoret Area
                administration.
              </p>

              <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-[#C9A227]">
                  Important
                </p>

                <p className="mt-3 leading-7 text-slate-300">
                  Always verify official giving details through the church
                  administration before making a contribution.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center bg-[#D81B60] p-8 md:p-12 lg:p-14">
              <div className="text-center">
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white/15 text-5xl">
                  ♡
                </div>

                <h3 className="heading-font mt-7 text-3xl font-bold">
                  Thank you.
                </h3>

                <p className="mt-4 leading-7 text-white/80">
                  Your generosity supports faith, family and purpose.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FUTURE DIGITAL GIVING */}
      <section className="bg-[#F7F7F5] px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#D81B60]">
                Coming Later
              </p>

              <h2 className="heading-font mt-3 text-4xl font-bold text-[#123B63] md:text-5xl">
                Digital giving platform.
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                The future CCA platform can provide secure digital giving,
                giving receipts, project-based contributions and transparent
                reporting.
              </p>

              <div className="mt-7 space-y-4">
                {[
                  'Secure online giving',
                  'Mobile payment integration',
                  'Giving receipts',
                  'Project-based giving',
                  'Administrative reporting',
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

            <div className="rounded-[2rem] bg-white p-8 shadow-sm md:p-12">
              <p className="text-5xl">✦</p>

              <h3 className="heading-font mt-6 text-3xl font-bold text-[#123B63]">
                Faithful stewardship.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Technology should make giving easier while maintaining
                accountability, security and trust.
              </p>

              <Link
                to="/contact"
                className="mt-7 inline-flex rounded-full bg-[#123B63] px-6 py-3 text-sm font-bold text-white"
              >
                Contact Administration
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-20 text-center lg:px-8">
        <h2 className="heading-font text-4xl font-bold text-[#123B63]">
          Thank you for supporting the work.
        </h2>

        <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
          Together we can continue building faith, strengthening families and
          serving our communities.
        </p>

        <Link
          to="/"
          className="mt-7 inline-flex rounded-full bg-[#D81B60] px-7 py-3 text-sm font-bold text-white"
        >
          Return Home
        </Link>
      </section>
    </div>
  )
}