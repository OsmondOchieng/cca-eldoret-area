import CCALogo from './CCALogo'

export default function Footer() {
  return (
    <footer className="bg-[#071a2d] px-5 py-14 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* BRAND */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4">

              <div className="flex h-16 w-12 items-center justify-center rounded-xl bg-white px-2">
                <CCALogo
                  size="lg"
                />
              </div>

              <div>
                <p className="text-lg font-black">
                  CCA Church Eldoret Area
                </p>

                <p className="mt-1 text-sm text-slate-400">
                  Faith | Family | Purpose
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-md leading-7 text-slate-400">
              A church family committed to faith, fellowship, service and
              purpose.
            </p>
          </div>

          {/* EXPLORE */}
          <div>
            <h3 className="font-bold">
              Explore
            </h3>

            <div className="mt-4 space-y-3 text-sm text-slate-400">
              <a
                className="block transition hover:text-white"
                href="#about"
              >
                About
              </a>

              <a
                className="block transition hover:text-white"
                href="#legacy"
              >
                Our Legacy
              </a>

              <a
                className="block transition hover:text-white"
                href="#churches"
              >
                Churches
              </a>

              <a
                className="block transition hover:text-white"
                href="#leadership"
              >
                Leadership
              </a>

              <a
                className="block transition hover:text-white"
                href="#ministries"
              >
                Ministries
              </a>
            </div>
          </div>

          {/* CONNECT */}
          <div>
            <h3 className="font-bold">
              Connect
            </h3>

            <div className="mt-4 space-y-3 text-sm text-slate-400">
              <a
                className="block transition hover:text-white"
                href="#pastors"
              >
                Pastors
              </a>

              <a
                className="block transition hover:text-white"
                href="#events"
              >
                Events
              </a>

              <a
                className="block transition hover:text-white"
                href="#contact"
              >
                Contact
              </a>

              <span className="block">
                Eldoret Area, Kenya
              </span>
            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="mt-12 border-t border-white/10 pt-7">
          <div className="flex flex-col gap-3 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">

            <p>
              © {new Date().getFullYear()} CCA Church Eldoret Area.
            </p>

            <p>
              Faith | Family | Purpose
            </p>

          </div>
        </div>

      </div>
    </footer>
  )
}