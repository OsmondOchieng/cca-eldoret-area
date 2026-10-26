type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-14 max-w-3xl text-center">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#D81B60]">
        {eyebrow}
      </p>

      <h2 className="heading-font text-4xl font-bold leading-tight text-[#123B63] md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-lg leading-8 text-slate-600">
          {description}
        </p>
      )}
    </div>
  )
}