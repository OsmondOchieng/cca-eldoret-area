import { Link } from 'react-router-dom'
import CCALogo from '../components/CCALogo'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F7F7F5]">

      {/* =====================================================
          HEADER
      ===================================================== */}

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


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#123B63] px-5 py-24 text-white lg:px-8">

        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#D81B60]/20 blur-3xl" />

        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#C9A227]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">

          <div className="max-w-4xl">

            <p className="text-sm font-black uppercase tracking-[0.3em] text-[#C9A227]">
              About CCA Eldoret Area
            </p>

            <h1 className="heading-font mt-5 text-5xl font-bold leading-tight md:text-7xl">
              Faith.
              <br />
              Family.
              <br />
              <span className="text-[#D81B60]">
                Purpose.
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-blue-100">
              Discover the story, heritage, leadership and mission of the
              Church of Christ in Africa — Eldoret Area.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHO WE ARE
      ===================================================== */}

      <section className="bg-white px-5 py-24 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

            <div>

              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#D81B60]">
                Who We Are
              </p>

              <h2 className="heading-font mt-4 text-4xl font-bold leading-tight text-[#123B63] md:text-5xl">
                A church family rooted in faith and service
              </h2>

              <p className="mt-7 text-lg leading-8 text-slate-600">
                The Church of Christ in Africa is a Christian community
                committed to worship, fellowship, spiritual growth, service
                and the proclamation of the Gospel.
              </p>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Within the Eldoret Area, congregations, pastorates,
                ministries and leaders work together as one church family,
                creating opportunities for people to connect, belong,
                grow and serve.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">

                <div className="rounded-2xl bg-[#F7F7F5] p-5">
                  <p className="text-3xl font-black text-[#D81B60]">
                    5
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[#123B63]">
                    Churches
                  </p>
                </div>

                <div className="rounded-2xl bg-[#F7F7F5] p-5">
                  <p className="text-3xl font-black text-[#D81B60]">
                    2
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[#123B63]">
                    Pastorates
                  </p>
                </div>

                <div className="rounded-2xl bg-[#F7F7F5] p-5">
                  <p className="text-3xl font-black text-[#D81B60]">
                    1
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[#123B63]">
                    Church Family
                  </p>
                </div>

              </div>

            </div>


            {/* AREA IN-CHARGE */}

            <div className="relative overflow-hidden rounded-[2rem] bg-[#123B63] p-4 shadow-2xl">

              <div className="relative flex min-h-[560px] items-center justify-center overflow-hidden rounded-[1.5rem] bg-[#0c2944]">

                <img
                  src="/images/leadership/area-in-charge.jpg"
                  alt="Rev. Prof. Peter Odera Ajuoga"
                  className="h-full max-h-[560px] w-full object-contain object-center"
                  onError={(event) => {
                    event.currentTarget.style.display = 'none'
                  }}
                />

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#071a2d] via-[#071a2d]/40 to-transparent" />

                <div className="absolute bottom-7 left-7 right-7">

                  <p className="text-xs font-black uppercase tracking-[0.25em] text-[#C9A227]">
                    Area In-Charge
                  </p>

                  <h3 className="heading-font mt-2 text-2xl font-bold text-white md:text-3xl">
                    Rev. Prof. Peter Odera Ajuoga
                  </h3>

                  <p className="mt-2 text-sm text-blue-100">
                    CCA Church Eldoret Area
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          OUR LEGACY
      ===================================================== */}

      <section className="overflow-hidden bg-[#123B63] text-white">

        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">

          {/* FOUNDING FATHER PHOTO */}

          <div className="relative min-h-[650px] bg-[#0c2944]">

            <img
              src="/images/leadership/founding-father.jpg"
              alt="Archbishop Dr. Mathews Abednego Ajuoga"
              className="h-full w-full object-contain object-center"
              onError={(event) => {
                event.currentTarget.style.display = 'none'
              }}
            />

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-[#071a2d] via-[#071a2d]/50 to-transparent" />

            <div className="absolute bottom-8 left-8 right-8">

              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#C9A227]">
                Founding Father
              </p>

              <h3 className="heading-font mt-2 text-2xl font-bold md:text-3xl">
                Archbishop Dr. Mathews Abednego Ajuoga
              </h3>

            </div>

          </div>


          {/* LEGACY TEXT */}

          <div className="flex items-center px-7 py-20 lg:px-16">

            <div>

              <p className="text-sm font-black uppercase tracking-[0.3em] text-[#C9A227]">
                Our Legacy
              </p>

              <h2 className="heading-font mt-5 text-4xl font-bold leading-tight md:text-5xl">
                A heritage that continues
              </h2>

              <p className="mt-7 text-lg leading-8 text-blue-100">
                The story of the Church of Christ in Africa is built upon
                generations of faith, sacrifice, service and commitment to
                the work of God.
              </p>

              <p className="mt-5 text-lg leading-8 text-blue-100">
                The contribution of Archbishop Dr. Mathews Abednego Ajuoga,
                the founding father, forms an important part of the heritage
                that continues to inspire the church today.
              </p>

              <p className="mt-5 text-lg leading-8 text-blue-100">
                That heritage challenges every generation to preserve what
                is valuable, strengthen the church and prepare the way for
                those who will come after us.
              </p>

              <div className="mt-9 border-l-4 border-[#D81B60] pl-6">

                <p className="heading-font text-2xl font-bold">
                  “Faith passed from generation to generation.”
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FAITH FAMILY PURPOSE
      ===================================================== */}

      <section className="bg-[#F7F7F5] px-5 py-24 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto mb-14 max-w-3xl text-center">

            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#D81B60]">
              What Defines Us
            </p>

            <h2 className="heading-font mt-4 text-4xl font-bold text-[#123B63] md:text-5xl">
              Faith. Family. Purpose.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Three ideas that express the kind of church family we want to
              build together.
            </p>

          </div>


          <div className="grid gap-7 md:grid-cols-3">

            {/* FAITH */}

            <article className="group rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#123B63] text-2xl font-black text-white">
                01
              </div>

              <h3 className="heading-font mt-7 text-3xl font-bold text-[#123B63]">
                Faith
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                We seek to grow through Scripture, prayer, worship,
                discipleship and a deeper relationship with God.
              </p>

              <div className="mt-7 h-1 w-12 rounded-full bg-[#D81B60] transition-all duration-300 group-hover:w-20" />

            </article>


            {/* FAMILY */}

            <article className="group rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D81B60] text-2xl font-black text-white">
                02
              </div>

              <h3 className="heading-font mt-7 text-3xl font-bold text-[#123B63]">
                Family
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                We believe church should be a place where people can
                connect, belong, encourage one another and walk together.
              </p>

              <div className="mt-7 h-1 w-12 rounded-full bg-[#D81B60] transition-all duration-300 group-hover:w-20" />

            </article>


            {/* PURPOSE */}

            <article className="group rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#C9A227] text-2xl font-black text-white">
                03
              </div>

              <h3 className="heading-font mt-7 text-3xl font-bold text-[#123B63]">
                Purpose
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                We encourage every believer to discover their gifts,
                develop them and use them in God’s work and service.
              </p>

              <div className="mt-7 h-1 w-12 rounded-full bg-[#D81B60] transition-all duration-300 group-hover:w-20" />

            </article>

          </div>

        </div>

      </section>


      {/* =====================================================
          OUR VISION
      ===================================================== */}

      <section className="bg-white px-5 py-24 lg:px-8">

        <div className="mx-auto max-w-5xl text-center">

          <p className="text-sm font-black uppercase tracking-[0.3em] text-[#D81B60]">
            Our Direction
          </p>

          <h2 className="heading-font mt-4 text-4xl font-bold text-[#123B63] md:text-5xl">
            Building a church for generations
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-600">
            We envision a church that remains faithful to its heritage while
            embracing the opportunities of the present and preparing
            confidently for the future.
          </p>

          <div className="mt-12 grid gap-5 text-left md:grid-cols-2">

            <div className="rounded-[2rem] bg-[#F7F7F5] p-7">

              <p className="text-xs font-black uppercase tracking-widest text-[#D81B60]">
                Spiritual Growth
              </p>

              <h3 className="heading-font mt-3 text-2xl font-bold text-[#123B63]">
                Growing disciples
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Encouraging people of every generation to grow in faith,
                character, knowledge and service.
              </p>

            </div>


            <div className="rounded-[2rem] bg-[#F7F7F5] p-7">

              <p className="text-xs font-black uppercase tracking-widest text-[#D81B60]">
                Community
              </p>

              <h3 className="heading-font mt-3 text-2xl font-bold text-[#123B63]">
                Serving beyond the walls
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Strengthening our communities through compassion,
                evangelism, service and practical support.
              </p>

            </div>


            <div className="rounded-[2rem] bg-[#F7F7F5] p-7">

              <p className="text-xs font-black uppercase tracking-widest text-[#D81B60]">
                Leadership
              </p>

              <h3 className="heading-font mt-3 text-2xl font-bold text-[#123B63]">
                Developing servants
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Developing leaders who serve with integrity, humility,
                excellence and accountability.
              </p>

            </div>


            <div className="rounded-[2rem] bg-[#F7F7F5] p-7">

              <p className="text-xs font-black uppercase tracking-widest text-[#D81B60]">
                Future
              </p>

              <h3 className="heading-font mt-3 text-2xl font-bold text-[#123B63]">
                Preparing the next generation
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Equipping children, youth, families and emerging leaders
                to carry the mission forward.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CALL TO ACTION
      ===================================================== */}

      <section className="bg-[#123B63] px-5 py-20 text-white lg:px-8">

        <div className="mx-auto max-w-5xl text-center">

          <p className="text-sm font-black uppercase tracking-[0.3em] text-[#C9A227]">
            CCA Eldoret Area
          </p>

          <h2 className="heading-font mt-5 text-4xl font-bold md:text-5xl">
            Come, connect, belong and discover your purpose.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            There is a place for you within the CCA church family.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">

            <Link
              to="/"
              className="rounded-full bg-[#D81B60] px-7 py-3.5 font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#b71550]"
            >
              Explore Our Churches
            </Link>

            <Link
              to="/leadership"
              className="rounded-full border border-white/30 px-7 py-3.5 font-bold text-white transition hover:bg-white hover:text-[#123B63]"
            >
              Meet Our Leadership
            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="bg-[#071a2d] px-5 py-10 text-white lg:px-8">

        <div className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-center md:justify-between">

          <Link
            to="/"
            className="flex items-center gap-3"
          >

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

          </Link>

          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} CCA Church Eldoret Area.
          </p>

        </div>

      </footer>

    </div>
  )
}