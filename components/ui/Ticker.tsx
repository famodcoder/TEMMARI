const ITEMS = [
  'Limitless Classic Styling',
  'All Body Types Welcome',
  'The So Fly Collection',
  'Bespoke Made-to-Measure',
  'Quality Without Compromise',
  'Shop via WhatsApp',
]

export default function Ticker() {
  const doubled = [...ITEMS, ...ITEMS]

  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker__track">
        {doubled.map((item, i) => (
          <span key={i} className="ticker__item">
            {item}
            <span className="ticker__dot" />
          </span>
        ))}
      </div>

    </div>
  )
}
