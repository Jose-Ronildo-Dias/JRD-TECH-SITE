export default function HeroGraphic() {
  return (
    <svg className="hero-graphic" viewBox="0 0 520 480" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="hg-line" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="var(--accent-2)" stopOpacity="0.55" />
        </linearGradient>
        <radialGradient id="hg-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* background grid, subtle */}
      <g opacity="0.18" stroke="var(--border)" strokeWidth="1">
        {Array.from({ length: 7 }).map((_, i) => (
          <line key={`v${i}`} x1={40 + i * 72} y1="20" x2={40 + i * 72} y2="460" />
        ))}
        {Array.from({ length: 7 }).map((_, i) => (
          <line key={`h${i}`} x1="20" y1={40 + i * 68} x2="500" y2={40 + i * 68} />
        ))}
      </g>

      {/* idea node glow */}
      <circle cx="108" cy="248" r="90" fill="url(#hg-glow)" />

      {/* connecting paths from idea to system nodes */}
      <g stroke="url(#hg-line)" strokeWidth="1.6" fill="none">
        <path className="hg-flow" d="M132 248 C 210 248, 230 150, 320 128" />
        <path d="M132 240 C 200 200, 250 210, 336 214" />
        <path d="M132 258 C 210 300, 260 320, 340 320" />
        <path d="M132 266 C 220 360, 260 372, 328 388" />
      </g>

      {/* idea node */}
      <circle cx="108" cy="248" r="34" fill="var(--bg)" stroke="var(--accent)" strokeWidth="2" />
      <g stroke="var(--accent-strong)" strokeWidth="2" strokeLinecap="round">
        <line x1="108" y1="222" x2="108" y2="214" />
        <line x1="128" y1="234" x2="135" y2="228" />
        <line x1="88" y1="234" x2="81" y2="228" />
        <line x1="128" y1="262" x2="135" y2="268" />
        <line x1="88" y1="262" x2="81" y2="268" />
      </g>
      <circle cx="108" cy="248" r="10" fill="var(--accent-soft)" stroke="var(--accent)" strokeWidth="1.4" />

      {/* system / interface nodes */}
      <g>
        <rect x="322" y="104" width="86" height="48" rx="10" fill="var(--surface)" stroke="var(--border)" />
        <circle cx="322" cy="128" r="3.5" fill="var(--accent)" />
        <rect x="334" y="118" width="52" height="6" rx="3" fill="var(--border)" />
        <rect x="334" y="130" width="36" height="6" rx="3" fill="var(--border)" />

        <rect x="338" y="190" width="94" height="48" rx="10" fill="var(--surface)" stroke="var(--border)" />
        <circle cx="338" cy="214" r="3.5" fill="var(--accent-2)" />
        <rect x="350" y="204" width="58" height="6" rx="3" fill="var(--border)" />
        <rect x="350" y="216" width="40" height="6" rx="3" fill="var(--border)" />

        <rect x="342" y="296" width="94" height="48" rx="10" fill="var(--surface)" stroke="var(--border)" />
        <circle cx="342" cy="320" r="3.5" fill="var(--accent)" />
        <rect x="354" y="310" width="58" height="6" rx="3" fill="var(--border)" />
        <rect x="354" y="322" width="44" height="6" rx="3" fill="var(--border)" />

        <rect x="326" y="364" width="86" height="48" rx="10" fill="var(--surface)" stroke="var(--border)" />
        <circle cx="326" cy="388" r="3.5" fill="var(--accent-2)" />
        <rect x="338" y="378" width="52" height="6" rx="3" fill="var(--border)" />
        <rect x="338" y="390" width="36" height="6" rx="3" fill="var(--border)" />
      </g>

      {/* small code glyph accent */}
      <text x="44" y="420" fontFamily="var(--font-display)" fontSize="20" fill="var(--text-tertiary)">
        &lt;/&gt;
      </text>
      <rect className="hg-cursor" x="46" y="438" width="10" height="16" fill="var(--accent)" />
    </svg>
  )
}
