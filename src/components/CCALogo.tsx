type CCALogoProps = {
  size?: 'sm' | 'md' | 'lg'
  className?: string
  title?: string
}

export default function CCALogo({
  size = 'md',
  className = '',
  title = 'CCA',
}: CCALogoProps) {
  const sizes = {
    sm: 'h-10 w-7',
    md: 'h-14 w-9',
    lg: 'h-24 w-16',
  }

  return (
    <div
      className={`flex h-auto shrink-0 items-center justify-center ${sizes[size]} ${className}`}
      aria-label={title}
    >
      <svg
        viewBox="0 0 100 180"
        xmlns="http://www.w3.org/2000/svg"
        className="block h-full w-full"
        role="img"
        aria-label={title}
        preserveAspectRatio="xMidYMid meet"
      >
        {/* =================================================
            CENTRAL CHRISTIAN CROSS
            ================================================= */}

        {/* Main vertical cross stem */}
        <rect
          x="43"
          y="5"
          width="14"
          height="100"
          fill="#D81B60"
        />

        {/* Cross horizontal bar */}
        <rect
          x="27"
          y="32"
          width="46"
          height="14"
          fill="#D81B60"
        />

        {/* =================================================
            H STRUCTURE
            The cross grows directly from the centre of H.
            The two H pillars continue ABOVE and BELOW
            the horizontal H bar.
            ================================================= */}

        {/* Left H pillar */}
        <rect
          x="27"
          y="75"
          width="13"
          height="98"
          fill="#D81B60"
        />

        {/* Right H pillar */}
        <rect
          x="60"
          y="75"
          width="13"
          height="98"
          fill="#D81B60"
        />

        {/* H horizontal bar */}
        <rect
          x="27"
          y="105"
          width="46"
          height="14"
          fill="#D81B60"
        />
      </svg>
    </div>
  )
}