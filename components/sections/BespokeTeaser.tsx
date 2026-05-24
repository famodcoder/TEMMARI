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

    </section>
  )
}
