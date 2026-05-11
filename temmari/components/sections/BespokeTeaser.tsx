import Link from 'next/link'
import { WA_LINK } from '@/lib/products'

const FEATURES = [
  { title: 'All Sizes',    desc: 'Crafted for every body type, no compromises'    },
  { title: 'Your Fabric',  desc: 'Choose your preferred material and finish'      },
  { title: 'Your Vision',  desc: "Bring your idea, we'll bring it to life"         },
  { title: 'Fair Pricing', desc: 'Luxury quality at accessible price points'      },
]

export default function BespokeTeaser() {
  const waMessage = encodeURIComponent("Hi! I'd like to place a bespoke order with Temmari.")

  return (
    <section className="bespoke" aria-labelledby="bespoke-heading">
      {/* Content col */}
      <div className="bespoke__content">
        <div className="eyebrow">
          <span className="eyebrow-line" />
          <span className="eyebrow-text">Tailored for You</span>
        </div>

        <h2 id="bespoke-heading" className="section-heading">
          Bespoke &amp;<br />
          <em>Made-to-Measure</em>
        </h2>

        <p className="bespoke__text">
          Can&rsquo;t find your perfect fit off the rack? We&rsquo;ll build it around you.
          Our bespoke service is designed for every body type — because you deserve
          clothes made exactly for you, not the other way around.
        </p>

        <div className="bespoke__ctas">
          <a
            href={`${WA_LINK}?text=${waMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-fill"
          >
            Start Your Bespoke Order
          </a>
          <Link href="/bespoke" className="btn btn-ghost">
            Learn More
          </Link>
        </div>
      </div>

      {/* Features grid */}
      <ul className="bespoke__features" aria-label="Bespoke service features">
        {FEATURES.map(({ title, desc }) => (
          <li key={title} className="bespoke__feat">
            <h3 className="bespoke__feat-title">{title}</h3>
            <p className="bespoke__feat-desc">{desc}</p>
          </li>
        ))}
      </ul>

      {/* Watermark */}
      <span className="bespoke__watermark" aria-hidden="true">Bespoke</span>

      <style jsx>{`
        .bespoke {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 100px;
          padding: var(--space-xl) var(--space-lg);
          max-width: 1400px;
          margin: 0 auto;
          align-items: center;
          position: relative;
          background: var(--gold-pale);
        }

        /* Outer wrapper needs its own bg */
        :global(.bespoke-wrapper) {
          background: var(--gold-pale);
        }

        .bespoke__content { position: relative; z-index: 1; }
        .bespoke__content .section-heading { margin: 16px 0 22px; }

        .bespoke__text {
          font-size: 14px;
          line-height: 1.95;
          color: var(--mid-gray);
          font-weight: 300;
          margin-bottom: 38px;
        }

        .bespoke__ctas {
          display: flex;
          align-items: center;
          gap: 28px;
        }

        .bespoke__features {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
          list-style: none;
          position: relative;
          z-index: 1;
        }

        .bespoke__feat {
          border-left: 2px solid var(--wine);
          padding-left: 18px;
        }

        .bespoke__feat-title {
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--slate);
          font-weight: 500;
          margin-bottom: 6px;
        }

        .bespoke__feat-desc {
          font-size: 13px;
          color: var(--mid-gray);
          line-height: 1.7;
          font-weight: 300;
        }

        .bespoke__watermark {
          position: absolute;
          font-family: var(--font-serif);
          font-size: 200px;
          color: rgba(124, 28, 58, 0.05);
          font-style: italic;
          right: -30px;
          top: 50%;
          transform: translateY(-50%);
          font-weight: 400;
          pointer-events: none;
          user-select: none;
          line-height: 1;
          white-space: nowrap;
        }

        @media (max-width: 1024px) {
          .bespoke { grid-template-columns: 1fr; gap: 48px; }
          .bespoke__watermark { display: none; }
        }
      `}</style>
    </section>
  )
}
