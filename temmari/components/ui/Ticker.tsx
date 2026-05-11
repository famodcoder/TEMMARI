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

      <style jsx>{`
        .ticker {
          background: var(--wine-deep);
          padding: 13px 0;
          overflow: hidden;
          display: flex;
        }
        .ticker__track {
          display: flex;
          animation: ticker 22s linear infinite;
          white-space: nowrap;
          will-change: transform;
        }
        .ticker__item {
          display: inline-flex;
          align-items: center;
          gap: 32px;
          padding: 0 32px;
          font-size: 10px;
          letter-spacing: 3.5px;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.5);
          font-weight: 300;
        }
        .ticker__dot {
          display: inline-block;
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: var(--gold);
          flex-shrink: 0;
        }
      `}</style>
    </div>
  )
}
