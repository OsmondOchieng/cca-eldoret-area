
import { useMemo, useState } from 'react'

export type SearchItem = {
  title: string
  category: string
  description: string
  href: string
}

type LiveSearchProps = {
  items: SearchItem[]
}

export default function LiveSearch({ items }: LiveSearchProps) {
  const [query, setQuery] = useState('')
  const [isFocused, setIsFocused] = useState(false)

  const results = useMemo(() => {
    const searchTerm = query.trim().toLowerCase()

    if (!searchTerm) return []

    return items
      .filter((item) => {
        const searchableText = [
          item.title,
          item.category,
          item.description,
        ]
          .join(' ')
          .toLowerCase()

        return searchableText.includes(searchTerm)
      })
      .slice(0, 8)
  }, [items, query])

  const showResults = isFocused && query.trim().length > 0

  return (
    <div className="relative w-full min-w-0 max-w-xs">
      <label htmlFor="cca-live-search" className="sr-only">
        Search churches, leaders, ministries and pages
      </label>

      <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 transition focus-within:border-[#D81B60] focus-within:ring-2 focus-within:ring-[#D81B60]/10">
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          className="h-5 w-5 shrink-0 text-slate-400"
        >
          <circle
            cx="10.8"
            cy="10.8"
            r="6.8"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="m16 16 4.2 4.2"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>

        <input
          id="cca-live-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            // Let a result link receive its click before closing the list.
            window.setTimeout(() => setIsFocused(false), 150)
          }}
          onKeyDown={(event) => {
            if (event.key === 'Escape') {
              setQuery('')
              setIsFocused(false)
            }
          }}
          placeholder="Search CCA..."
          autoComplete="off"
          aria-label="Search CCA website"
          aria-expanded={showResults}
          className="w-full min-w-0 bg-transparent text-sm text-[#123B63] outline-none placeholder:text-slate-400"
        />

        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery('')
              setIsFocused(true)
            }}
            aria-label="Clear search"
            className="shrink-0 text-lg leading-none text-slate-400 hover:text-[#D81B60]"
          >
            ×
          </button>
        )}
      </div>

      {showResults && (
        <div
          role="region"
          aria-label="Search results"
          className="absolute right-0 top-full z-[80] mt-3 max-h-[min(70vh,460px)] w-[min(90vw,380px)] overflow-y-auto rounded-2xl border border-slate-100 bg-white p-2 shadow-2xl"
        >
          {results.length > 0 ? (
            <>
              <p className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                {results.length} matching{' '}
                {results.length === 1 ? 'result' : 'results'}
              </p>

              {results.map((item) => (
                <a
                  key={`${item.category}-${item.title}-${item.href}`}
                  href={item.href}
                  onClick={() => {
                    setQuery('')
                    setIsFocused(false)
                  }}
                  className="block rounded-xl px-3 py-3 transition hover:bg-[#F7F7F5] focus:bg-[#F7F7F5] focus:outline-none"
                >
                  <span className="block text-sm font-bold text-[#123B63]">
                    {item.title}
                  </span>

                  <span className="mt-1 block text-[11px] font-bold uppercase tracking-wider text-[#D81B60]">
                    {item.category}
                  </span>

                  <span className="mt-1 block text-xs leading-5 text-slate-500">
                    {item.description}
                  </span>
                </a>
              ))}
            </>
          ) : (
            <div className="px-4 py-6 text-center">
              <p className="font-semibold text-[#123B63]">
                No matching results
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Try a church, leader, ministry or page name.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
