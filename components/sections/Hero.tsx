import Link from 'next/link'
import { WA_LINK } from '@/lib/products'

export default function Hero() {
  return (
    <section className="hero" aria-label="Hero — So Fly debut collection">
      {/* Left — copy */}
      <div className="hero__left">
        <div className="eyebrow">
          <span className="eyebrow-line" />
          <span className="eyebrow-text">Debut Collection · </span>
        </div>

        <h1 className="hero__heading">
          Dress Like<br />
          You Were<br />
          <em>Born For It</em>
        </h1>

        <p className="hero__sub">
          Temmari exists for those who refuse to compromise between quality,
          fit, and price. Sophisticated dressing — finally, for every body.
        </p>

        <div className="hero__ctas">
          <Link href="/collections/so-fly" className="btn btn-fill">
            Shop &ldquo;So Fly&rdquo;
          </Link>
          <Link href="/about" className="btn btn-ghost">
            Our Story
          </Link>
        </div>

        {/* Watermark mark */}
        <span className="hero__watermark" aria-hidden="true">TM</span>
      </div>

      {/* Right — dark editorial panel */}
      <div className="hero__right" aria-hidden="true">
        <div className="hero__grid-lines" />
        <span className="hero__large-text">Temmari</span>

        <div className="hero__panel-content">
          <div className="hero__tag">So Fly Collection</div>
          <div className="hero__stats">
            <HeroStat value="All"   label="Body Types"      />
            <HeroStat value="₦8.5k" label="Starting Price"  />
            <HeroStat value="100%"  label="Bespoke Option"  />
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="hero__scroll" aria-hidden="true">
        <span className="hero__scroll-line" />
        <span className="hero__scroll-label">Scroll</span>
      </div>
    </section>
  )
}

function HeroStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="stat">
      <div className="stat__value">{value}</div>
      <div className="stat__label">{label}</div>
    </div>
  )
}
