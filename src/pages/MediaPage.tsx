import { Link } from 'react-router-dom'

const mediaCategories = [
  {
    title: 'Sermons',
    description:
      'Listen to messages, teachings and sermons from the CCA Eldoret Area.',
    icon: '▶',
  },
  {
    title: 'Church Gallery',
    description:
      'Explore photographs from worship services, conferences, fellowships and church activities.',
    icon: '▣',
  },
  {
    title: 'Videos',
    description:
      'Watch church programmes, announcements, interviews and special events.',
    icon: '▷',
  },
  {
    title: 'Announcements',
    description:
      'Stay informed about important church news, programmes and upcoming activities.',
    icon: '!',
  },
]

const featuredItems = [
  {
    type: 'SERMON',
    title: 'Faith, Family & Purpose',
    description:
      'Messages that encourage believers to grow in faith and discover their God-given purpose.',
  },
  {
    type: 'VIDEO',
    title: 'CCA Eldoret Area',
    description:
      'Video content from services, conferences, youth activities and special programmes.',
  },
  {
    type: 'GALLERY',
    title: 'Life at CCA',
    description:
      'A visual collection celebrating worship, fellowship, family and service.',
  },
]

export default function MediaPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0c2944] px-5 py-24 text-white lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(216,27,96,0.20),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl">
          <Link
            to="/"
            className="text-sm font-semibold text-slate-300 transition hover:text-white"
          >
            ← Back to Home
          </Link>

          <p className="mt-12 text-sm font-bold uppercase tracking-[0.3em] text-[#C9A227]">
            CCA Media Centre
          </p>

          <h1 className="heading-font mt-4 max-w-4xl text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
            Faith beyond the
            <span className="text-[#D81B60]"> sanctuary.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            Discover sermons, videos, photographs, announcements and digital
            resources from the Church of Christ in Africa — Eldoret Area.
          </p>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#D81B60]">
              Explore
            </p>

            <h2 className="heading-font mt-3 text-4xl font-bold text-[#123B63] md:text-5xl">
              Our Media
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Stay connected with the life and work of the CCA Eldoret Area.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {mediaCategories.map((item) => (
              <div
                key={item.title}
                className="group rounded-3xl border border-slate-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D81B60]/10 text-xl font-bold text-[#D81B60] transition group-hover:bg-[#D81B60] group-hover:text-white">
                  {item.icon}
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#123B63]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>

                <button className="mt-6 text-sm font-bold text-[#D81B60]">
                  Explore →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="bg-[#F7F7F5] px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#D81B60]">
                Featured
              </p>

              <h2 className="heading-font mt-3 text-4xl font-bold text-[#123B63] md:text-5xl">
                Church stories & resources.
              </h2>
            </div>

            <p className="max-w-xl leading-7 text-slate-600">
              This area is designed to grow into a complete digital media
              library for the Eldoret Area.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {featuredItems.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-3xl bg-white shadow-sm"
              >
                <div className="flex aspect-[16/10] items-center justify-center bg-[#123B63]">
                  <div className="text-center">
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#D81B60] text-2xl font-bold text-white">
                      {item.type === 'SERMON'
                        ? '▶'
                        : item.type === 'VIDEO'
                          ? '▷'
                          : '▣'}
                    </div>

                    <p className="mt-4 text-xs font-bold uppercase tracking-[0.25em] text-[#C9A227]">
                      {item.type}
                    </p>
                  </div>
                </div>

                <div className="p-7">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#D81B60]">
                    CCA Eldoret Area
                  </p>

                  <h3 className="mt-3 text-2xl font-bold text-[#123B63]">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {item.description}
                  </p>

                  <button className="mt-6 rounded-full border border-slate-200 px-5 py-2.5 text-sm font-bold text-[#123B63] transition hover:border-[#D81B60] hover:text-[#D81B60]">
                    Coming Soon
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DIGITAL MEDIA CTA */}
      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-[#123B63] p-8 text-white md:p-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C9A227]">
                Coming Soon
              </p>

              <h2 className="heading-font mt-3 text-4xl font-bold md:text-5xl">
                A complete digital church media centre.
              </h2>

              <p className="mt-5 max-w-2xl leading-8 text-slate-300">
                Our future media platform will bring sermons, livestreams,
                photographs, videos, announcements and downloadable resources
                together in one place.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#D81B60] px-7 py-3.5 text-sm font-bold text-white transition hover:bg-[#b81650]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="bg-[#F7F7F5] px-5 py-16 text-center lg:px-8">
        <h2 className="heading-font text-3xl font-bold text-[#123B63]">
          Stay connected.
        </h2>

        <p className="mx-auto mt-3 max-w-xl leading-7 text-slate-600">
          Follow the journey of CCA Eldoret Area as we continue building faith,
          family and purpose.
        </p>

        <Link
          to="/"
          className="mt-6 inline-flex rounded-full bg-[#123B63] px-7 py-3 text-sm font-bold text-white"
        >
          Return Home
        </Link>
      </section>
    </div>
  )
}