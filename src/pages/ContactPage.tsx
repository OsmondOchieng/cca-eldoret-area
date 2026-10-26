import { useState } from 'react'
import type { FormEvent } from 'react'
import { Link } from 'react-router-dom'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0c2944] px-5 py-24 text-white lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(216,27,96,0.20),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl">
          <Link
            to="/"
            className="text-sm font-semibold text-slate-300 transition hover:text-white"
          >
            ← Back to Home
          </Link>

          <p className="mt-12 text-sm font-bold uppercase tracking-[0.3em] text-[#C9A227]">
            Contact Us
          </p>

          <h1 className="heading-font mt-4 max-w-4xl text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
            We would love to
            <span className="text-[#D81B60]"> hear from you.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            Whether you need prayer, want to visit a church, need information
            or would like to get involved, the CCA Eldoret Area welcomes you.
          </p>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          {/* INFO */}
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#D81B60]">
              Get in Touch
            </p>

            <h2 className="heading-font mt-3 text-4xl font-bold text-[#123B63] md:text-5xl">
              Let&apos;s connect.
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Reach out to the CCA Eldoret Area for information about our
              churches, pastorates, ministries, events and other church
              activities.
            </p>

            <div className="mt-10 space-y-5">
              <div className="rounded-2xl bg-[#F7F7F5] p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-[#D81B60]">
                  Area
                </p>

                <p className="mt-2 font-bold text-[#123B63]">
                  Church of Christ in Africa
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Eldoret Area
                </p>
              </div>

              <div className="rounded-2xl bg-[#F7F7F5] p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-[#D81B60]">
                  Pastorates
                </p>

                <p className="mt-2 font-bold text-[#123B63]">
                  Kipkaren Pastorate
                </p>

                <p className="mt-1 font-bold text-[#123B63]">
                  King&apos;ong&apos;o Pastorate
                </p>
              </div>

              <div className="rounded-2xl bg-[#123B63] p-6 text-white">
                <p className="text-xs font-bold uppercase tracking-widest text-[#C9A227]">
                  Leadership
                </p>

                <p className="mt-2 font-bold">
                  Rev. Prof. Peter Odera Ajuoga
                </p>

                <p className="mt-1 text-sm text-slate-300">
                  Area In-Charge
                </p>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="rounded-[2rem] border border-slate-100 bg-white p-7 shadow-xl md:p-10">
            {submitted ? (
              <div className="flex min-h-[500px] flex-col items-center justify-center text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#D81B60] text-3xl font-bold text-white">
                  ✓
                </div>

                <h2 className="heading-font mt-7 text-3xl font-bold text-[#123B63]">
                  Thank you for reaching out.
                </h2>

                <p className="mt-4 max-w-md leading-7 text-slate-600">
                  Your message has been received by this demo form. The next
                  stage will connect it to the church&apos;s real email or
                  backend system.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-7 rounded-full bg-[#123B63] px-7 py-3 text-sm font-bold text-white"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#D81B60]">
                  Message Us
                </p>

                <h2 className="heading-font mt-3 text-3xl font-bold text-[#123B63]">
                  How can we help?
                </h2>

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="text-sm font-bold text-[#123B63]"
                      >
                        Full Name
                      </label>

                      <input
                        id="name"
                        name="name"
                        required
                        type="text"
                        placeholder="Your name"
                        className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none transition focus:border-[#D81B60] focus:ring-2 focus:ring-[#D81B60]/10"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="text-sm font-bold text-[#123B63]"
                      >
                        Email Address
                      </label>

                      <input
                        id="email"
                        name="email"
                        required
                        type="email"
                        placeholder="you@example.com"
                        className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none transition focus:border-[#D81B60] focus:ring-2 focus:ring-[#D81B60]/10"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="text-sm font-bold text-[#123B63]"
                    >
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+254 ..."
                      className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none transition focus:border-[#D81B60] focus:ring-2 focus:ring-[#D81B60]/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="text-sm font-bold text-[#123B63]"
                    >
                      Subject
                    </label>

                    <select
                      id="subject"
                      name="subject"
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[#D81B60] focus:ring-2 focus:ring-[#D81B60]/10"
                    >
                      <option>General Enquiry</option>
                      <option>Prayer Request</option>
                      <option>Church Information</option>
                      <option>Ministry</option>
                      <option>Events</option>
                      <option>Giving</option>
                      <option>Technical / ICT</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="text-sm font-bold text-[#123B63]"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={7}
                      placeholder="Write your message here..."
                      className="mt-2 w-full resize-none rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none transition focus:border-[#D81B60] focus:ring-2 focus:ring-[#D81B60]/10"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-[#D81B60] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#b81650]"
                  >
                    Send Message
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* VISIT US */}
      <section className="bg-[#F7F7F5] px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#D81B60]">
                Visit
              </p>

              <h2 className="heading-font mt-3 text-4xl font-bold text-[#123B63] md:text-5xl">
                Find a church near you.
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                CCA Eldoret Area has churches serving communities across two
                pastorates.
              </p>

              <div className="mt-8 space-y-3">
                {[
                  'Kipkaren Church',
                  'Mwangaza Church',
                  'Majengo Church',
                  "King'ong'o Church",
                  'Turbo Church',
                ].map((church) => (
                  <div
                    key={church}
                    className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#D81B60] text-sm font-bold text-white">
                      ✓
                    </span>

                    <span className="font-semibold text-[#123B63]">
                      {church}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex min-h-[420px] items-center justify-center rounded-[2rem] bg-[#123B63] p-10 text-center text-white">
              <div>
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#D81B60] text-4xl">
                  +
                </div>

                <h3 className="heading-font mt-7 text-3xl font-bold">
                  More location information
                </h3>

                <p className="mx-auto mt-4 max-w-md leading-7 text-slate-300">
                  Church addresses, maps, service times and directions will be
                  added as the church directory is completed.
                </p>

                <Link
                  to="/"
                  className="mt-7 inline-flex rounded-full bg-white px-6 py-3 text-sm font-bold text-[#123B63]"
                >
                  View Churches
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 py-20 text-center lg:px-8">
        <h2 className="heading-font text-4xl font-bold text-[#123B63]">
          Faith | Family | Purpose
        </h2>

        <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-600">
          Come, connect, belong and discover your purpose in God&apos;s work.
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