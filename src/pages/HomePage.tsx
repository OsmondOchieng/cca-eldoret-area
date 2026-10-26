import SectionHeading from '../components/SectionHeading'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WelcomePopup from '../components/WelcomePopup'

import { churches } from '../data/churches'
import { leaders } from '../data/leaders'
import { pastors } from '../data/pastors'
import { ministries } from '../data/ministries'

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#123B63] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(216,27,96,0.35),transparent_35%)]" />

      <div className="relative mx-auto grid min-h-[650px] max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-2 lg:px-8">
        <div>
          <div className="mb-6 inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold backdrop-blur">
            Church of Christ in Africa
          </div>

          <h1 className="heading-font text-5xl font-bold leading-[1.05] md:text-7xl">
            Faith.
            <br />
            Family.
            <br />
            <span className="text-[#D81B60]">Purpose.</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-blue-100">
            Welcome to the CCA Church Eldoret Area — a church family where we
            connect, belong, grow in faith and discover our purpose in God’s
            work.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#churches"
              className="rounded-full bg-[#D81B60] px-7 py-3.5 text-center font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#b71550]"
            >
              Find a Church
            </a>

            <a
              href="#about"
              className="rounded-full border border-white/40 px-7 py-3.5 text-center font-bold text-white transition hover:bg-white hover:text-[#123B63]"
            >
              Discover CCA
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-8 text-sm text-blue-100">
            <div>
              <p className="text-3xl font-black text-white">5</p>
              <p>Churches</p>
            </div>

            <div>
              <p className="text-3xl font-black text-white">2</p>
              <p>Pastorates</p>
            </div>

            <div>
              <p className="text-3xl font-black text-white">1</p>
              <p>Church Family</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[2rem] bg-[#D81B60]/20 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 p-3 shadow-2xl backdrop-blur">
            <div className="flex h-[470px] items-center justify-center overflow-hidden rounded-[1.5rem] bg-[#0c2944]">
              <img
                src="/images/leadership/area-in-charge.jpg"
                alt="Rev. Prof. Peter Odera Ajuoga"
                className="h-full w-full object-contain object-center"
              />
            </div>

            <div className="absolute bottom-8 left-8 right-8 rounded-2xl bg-[#071a2d]/85 p-5 backdrop-blur-md">
              <p className="text-xs font-bold uppercase tracking-widest text-[#C9A227]">
                Eldoret Area
              </p>

              <p className="mt-1 text-xl font-bold">
                Rev. Prof. Peter Odera Ajuoga
              </p>

              <p className="text-sm text-blue-100">Area In-Charge</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function AboutSection() {
  const items = [
    {
      number: '01',
      title: 'Faith',
      text: 'Growing together through Scripture, prayer, worship and Christian fellowship.',
    },
    {
      number: '02',
      title: 'Family',
      text: 'Building a welcoming church family where people can connect, belong and support one another.',
    },
    {
      number: '03',
      title: 'Purpose',
      text: 'Equipping people to discover their gifts and use them in God’s work and in the community.',
    },
  ]

  return (
    <section
      id="about"
      className="bg-[#F7F7F5] px-5 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Who We Are"
          title="A church family built on faith"
          description="CCA Church Eldoret Area brings congregations, pastors, leaders and ministries together in fellowship and service."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.number}
              className="group rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="text-sm font-black tracking-widest text-[#D81B60]">
                {item.number}
              </span>

              <h3 className="heading-font mt-6 text-3xl font-bold text-[#123B63]">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">{item.text}</p>

              <div className="mt-7 h-1 w-12 rounded-full bg-[#D81B60] transition-all duration-300 group-hover:w-20" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function LegacySection() {
  return (
    <section
      id="legacy"
      className="overflow-hidden bg-[#123B63] text-white"
    >
      <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
        {/* FOUNDING FATHER IMAGE */}
        <div className="relative min-h-[600px] overflow-hidden bg-[#0c2944]">
          <div className="flex h-full min-h-[600px] items-center justify-center p-6 md:p-10">
            <img
              src="/images/leadership/founding-father.jpg"
              alt="Archbishop Dr. Mathews Abednego Ajuoga"
              className="max-h-[560px] w-auto max-w-full object-contain object-center drop-shadow-2xl"
            />
          </div>

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071a2d]/90 via-transparent to-transparent" />

          <div className="absolute bottom-8 left-8 right-8">
            <p className="text-sm font-bold uppercase tracking-widest text-[#C9A227]">
              Founding Father
            </p>

            <p className="mt-1 text-xl font-bold">
              Archbishop Dr. Mathews Abednego Ajuoga
            </p>
          </div>
        </div>

        {/* LEGACY TEXT */}
        <div className="flex items-center px-6 py-20 lg:px-16">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#C9A227]">
              Our Legacy
            </p>

            <h2 className="heading-font mt-4 text-4xl font-bold md:text-5xl">
              A heritage of faith and service
            </h2>

            <p className="mt-7 text-lg leading-8 text-blue-100">
              The story of the Church of Christ in Africa is rooted in faith,
              service, community and a commitment to sharing the Gospel.
            </p>

            <p className="mt-5 text-lg leading-8 text-blue-100">
              The legacy of those who served before us continues to inspire
              today’s generation to build, serve and strengthen the church.
            </p>

            <div className="mt-8 border-l-4 border-[#D81B60] pl-5">
              <p className="text-xl font-bold">
                Faith passed from generation to generation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ChurchesSection() {
  return (
    <section
      id="churches"
      className="bg-white px-5 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Our Churches"
          title="Find your church family"
          description="Explore the congregations currently represented within the CCA Eldoret Area."
        />

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {churches.map((church) => (
            <a
              key={church.slug}
              href={`/churches/${church.slug}`}
              className="group overflow-hidden rounded-[2rem] bg-white shadow-md ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="relative h-60 overflow-hidden bg-[#123B63]">
                <img
                  src={church.image}
                  alt={church.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#C9A227]">
                    {church.pastorate}
                  </p>
                </div>
              </div>

              <div className="p-7">
                <h3 className="heading-font text-2xl font-bold text-[#123B63]">
                  {church.name}
                </h3>

                <p className="mt-3 text-slate-600">{church.location}</p>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-sm font-bold text-[#D81B60]">
                    Explore Church
                  </span>

                  <span className="text-xl text-[#123B63] transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function PastorsSection() {
  const pastorates = [
    'Kipkaren Pastorate',
    "King'ong'o Pastorate",
  ]

  return (
    <section
      id="pastors"
      className="bg-[#F7F7F5] px-5 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Pastorates"
          title="Our pastors"
          description="Pastoral information is being organized so that official names, churches and contacts can be published accurately."
        />

        {pastorates.map((pastorate) => {
          const pastoratePastors = pastors.filter(
            (pastor) => pastor.pastorate === pastorate,
          )

          return (
            <div key={pastorate} className="mb-14">
              <div className="mb-7">
                <p className="text-sm font-bold uppercase tracking-widest text-[#D81B60]">
                  Pastorate
                </p>

                <h3 className="heading-font mt-2 text-3xl font-bold text-[#123B63]">
                  {pastorate}
                </h3>

                <p className="mt-2 text-slate-500">
                  Official pastor information will be added as details are
                  confirmed.
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {pastoratePastors.map((pastor) => (
                  <div
                    key={pastor.id}
                    className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
                  >
                    <div className="flex items-center gap-5">
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#123B63] text-2xl text-white">
                        ✦
                      </div>

                      <div>
                        <h4 className="font-bold text-[#123B63]">
                          {pastor.name}
                        </h4>

                        <p className="mt-1 text-sm text-slate-500">
                          {pastor.church}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

function LeadershipSection() {
  return (
    <section
      id="leadership"
      className="bg-white px-5 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Leadership"
          title="Serving with faith and purpose"
          description="Meet the people serving the church through spiritual leadership, administration, ministry and technology."
        />

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {leaders.map((leader) => (
            <article
              key={leader.id}
              className="group overflow-hidden rounded-[2rem] bg-white shadow-md ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div
                className={`relative h-80 overflow-hidden ${
                  leader.image
                    ? 'bg-[#123B63]'
                    : 'bg-gradient-to-br from-[#123B63] to-[#071a2d]'
                }`}
              >
                {leader.image ? (
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className={`h-full w-full transition duration-700 group-hover:scale-[1.03] ${
                      leader.id === 'founding-father'
                        ? 'object-contain object-center p-2'
                        : 'object-contain object-center p-4'
                    }`}
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <div className="text-center">
                      <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white/10 text-4xl text-white">
                        👤
                      </div>

                      <p className="mt-4 text-sm text-white/70">
                        Photo coming soon
                      </p>
                    </div>
                  </div>
                )}

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5 pt-20">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#C9A227]">
                    {leader.category}
                  </p>
                </div>
              </div>

              <div className="p-6">
                <h3 className="heading-font text-xl font-bold text-[#123B63]">
                  {leader.name}
                </h3>

                <p className="mt-1 text-sm font-bold text-[#D81B60]">
                  {leader.role}
                </p>

                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {leader.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function MinistriesSection() {
  return (
    <section
      id="ministries"
      className="bg-[#F7F7F5] px-5 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Ministries"
          title="There is a place for you"
          description="Use your gifts, grow in faith and serve alongside the church family."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ministries.map((ministry) => (
            <article
              key={ministry.id}
              className="group rounded-[2rem] bg-white p-7 shadow-sm ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D81B60] text-2xl text-white shadow-lg">
                {ministry.icon}
              </div>

              <h3 className="heading-font mt-6 text-2xl font-bold text-[#123B63]">
                {ministry.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {ministry.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function EventsSection() {
  const events = [
    {
      date: 'SUN',
      title: 'Sunday Worship',
      text: 'Weekly worship, fellowship and teaching.',
    },
    {
      date: 'WEEK',
      title: 'Bible Study',
      text: 'Growing together through Scripture.',
    },
    {
      date: 'AREA',
      title: 'Community Outreach',
      text: 'Serving and connecting with our community.',
    },
  ]

  return (
    <section
      id="events"
      className="bg-white px-5 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Events"
          title="Church life and upcoming events"
          description="This space will become the central place for church announcements, meetings, services, conferences and community activities."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {events.map((event) => (
            <article
              key={event.title}
              className="rounded-[2rem] border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#123B63] text-xs font-black text-white">
                  {event.date}
                </div>

                <span className="rounded-full bg-[#D81B60]/10 px-3 py-1 text-xs font-bold text-[#D81B60]">
                  Coming Soon
                </span>
              </div>

              <h3 className="heading-font mt-7 text-2xl font-bold text-[#123B63]">
                {event.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {event.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-[#123B63] px-5 py-24 text-white lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#C9A227]">
              Contact
            </p>

            <h2 className="heading-font mt-4 text-4xl font-bold md:text-5xl">
              We would love to hear from you.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Whether you are looking for a church family, need prayer, want
              to serve or simply want to learn more about CCA Eldoret Area,
              you are welcome.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-7 text-[#202124] shadow-2xl md:p-9">
            <h3 className="heading-font text-3xl font-bold text-[#123B63]">
              Send us a message
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              We will connect this form to the church communication system
              later.
            </p>

            <div className="mt-6 space-y-4">
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#D81B60]"
              />

              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#D81B60]"
              />

              <textarea
                rows={5}
                placeholder="Your message"
                className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#D81B60]"
              />

              <button
                type="button"
                className="w-full rounded-xl bg-[#D81B60] px-5 py-3.5 font-bold text-white transition hover:bg-[#b71550]"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <>
      <WelcomePopup />

      <Navbar />

      <main>
        <Hero />
        <AboutSection />
        <LegacySection />
        <ChurchesSection />
        <PastorsSection />
        <LeadershipSection />
        <MinistriesSection />
        <EventsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  )
}