type IconProps = { className?: string };

export function PinIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M12 21s7-6.2 7-11.2A7 7 0 1 0 5 9.8C5 14.8 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="9.8" r="2.2" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function EyeIcon({ className = "h-8 w-8" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <path
        d="M6 24c6.5-9 13.5-13 18-13s11.5 4 18 13c-6.5 9-13.5 13-18 13S12.5 33 6 24Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="24" cy="24" r="2.4" fill="currentColor" />
    </svg>
  );
}

export function LotusIcon({ className = "h-8 w-8" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <path
        d="M24 38c-2.4-6.5-9-10-14-11 4.2-1.2 8.5.2 12 3.4C20.4 22 16 16 14 10c5.5 3 9.2 8.8 10 16 1-7.2 4.6-13 10-16-2 6-6.4 12-8 20.4 3.5-3.2 7.8-4.6 12-3.4-5 1-11.6 4.5-14 11Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M24 38c0-8 2.4-14.5 8-20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M24 38c0-8-2.4-14.5-8-20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function LaptopIcon({ className = "h-8 w-8" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <rect
        x="9"
        y="10"
        width="30"
        height="20"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <circle cx="24" cy="20" r="4.2" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M20.5 24.2c2 1.4 5 1.4 7 0"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M6 32h36l-3 6H9l-3-6Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M34 14c6 2 10 8 11 12"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <ellipse cx="40" cy="12" rx="5" ry="2.4" transform="rotate(28 40 12)" fill="currentColor" />
      <ellipse cx="44" cy="18" rx="4" ry="2" transform="rotate(18 44 18)" fill="currentColor" />
    </svg>
  );
}

export function CalendarIcon({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden>
      <rect
        x="4"
        y="7"
        width="24"
        height="20"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path d="M4 13h24" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M10 4v6M22 4v6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path d="M10 18h2.2M15 18h2.2M20 18h2.2M10 22h2.2M15 22h2.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function HeartIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 20s-7.2-4.6-9.2-8.4C1.2 8.6 3 5.5 6.4 5.2 8.4 5 10 6.2 12 8.2 14 6.2 15.6 5 17.6 5.2c3.4.3 5.2 3.4 3.6 6.4C19.2 15.4 12 20 12 20Z" />
    </svg>
  );
}

export function ArrowCurve({ className = "h-10 w-10" }: IconProps) {
  return (
    <svg viewBox="0 0 64 48" fill="none" className={className} aria-hidden>
      <path
        d="M8 10c8 18 20 28 40 28"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M38 28c6 4 9 8 10 10 2-8 4-12 10-16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
