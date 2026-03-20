const defaultStroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14" {...defaultStroke} />
      <path d="m13 5 7 7-7 7" {...defaultStroke} />
    </svg>
  )
}

export function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="11" cy="11" r="7" {...defaultStroke} />
      <path d="m20 20-3.5-3.5" {...defaultStroke} />
    </svg>
  )
}

export function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 22s7-6 7-12a7 7 0 1 0-14 0c0 6 7 12 7 12Z" {...defaultStroke} />
      <circle cx="12" cy="10" r="2.5" {...defaultStroke} />
    </svg>
  )
}

export function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="8" r="4" {...defaultStroke} />
      <path d="M4 20a8 8 0 0 1 16 0" {...defaultStroke} />
    </svg>
  )
}

export function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m12 3 2.9 5.9 6.5 1-4.7 4.6 1.1 6.5L12 18l-5.8 3 1.1-6.5L2.6 10l6.5-1L12 3Z" fill="currentColor" />
    </svg>
  )
}

export function BellIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.5 10a5.5 5.5 0 1 1 11 0v4l1.8 2.2c.5.6.1 1.6-.7 1.6H5.4c-.8 0-1.2-1-.7-1.6L6.5 14v-4Z" {...defaultStroke} />
      <path d="M10 20a2 2 0 0 0 4 0" {...defaultStroke} />
    </svg>
  )
}

export function MessageIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 14a6 6 0 0 1-6 6H8l-4 3v-9a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6Z" {...defaultStroke} />
    </svg>
  )
}

export function DiceIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="4" {...defaultStroke} />
      <circle cx="9" cy="9" r="1.2" fill="currentColor" />
      <circle cx="15" cy="15" r="1.2" fill="currentColor" />
      <circle cx="9" cy="15" r="1.2" fill="currentColor" />
      <circle cx="15" cy="9" r="1.2" fill="currentColor" />
    </svg>
  )
}
