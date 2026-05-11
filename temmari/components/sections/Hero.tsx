import Link from 'next/link'
import { WA_LINK } from '@/lib/products'

export default function Hero() {
  return (
    <section className="hero" aria-label="Hero — So Fly debut collection">
      {/* Left — copy */}
      <div className="hero__left">
        <div className="eyebrow">
          <span className="eyebrow-line" />
          <span className="eyebrow-text">Debut Collection · 2025</span>
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

        {/* Watermark letter */}
        <span className="hero__watermark" aria-hidden="true">T</span>
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

      <style jsx>{`
        .hero {
          display: grid;
          grid-template-columns: 52% 48%;
          min-height: 100vh;
          padding-top: 72px; /* navbar height */
          position: relative;
        }

        /* ── Left ─────────────────────────────── */
        .hero__left {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 80px 64px 80px 56px;
          background: var(--off-white);
          position: relative;
          overflow: hidden;
          animation: fadeUp 0.8s var(--ease-out) both;
        }
        .hero__left::after {
          content: '';
          position: absolute;
          top: 0; right: 0;
          width: 1px;
          height: 100%;
          background: linear-gradient(to bottom, transparent, var(--gold), transparent);
        }

        .hero__heading {
          font-family: var(--font-serif);
          font-size: clamp(52px, 6vw, 80px);
          font-weight: 400;
          line-height: 1.06;
          color: var(--slate);
          margin-bottom: 28px;
          letter-spacing: -1.5px;
        }
        .hero__heading em {
          color: var(--wine);
          font-style: italic;
        }

        .hero__sub {
          font-size: 14px;
          line-height: 1.95;
          color: var(--mid-gray);
          font-weight: 300;
          max-width: 360px;
          margin-bottom: 48px;
          letter-spacing: 0.2px;
        }

        .hero__ctas {
          display: flex;
          align-items: center;
          gap: 28px;
        }

        .hero__watermark {
          position: absolute;
          bottom: -80px; left: -15px;
          font-family: var(--font-serif);
          font-size: 380px;
          color: rgba(124, 28, 58, 0.04);
          font-weight: 400;
          font-style: italic;
          line-height: 1;
          pointer-events: none;
          user-select: none;
        }

        /* ── Right ────────────────────────────── */
        .hero__right {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 56px;
          overflow: hidden;
          background: linear-gradient(155deg, var(--slate-mid) 0%, var(--wine-deep) 55%, var(--slate) 100%);
        }

        .hero__grid-lines {
          position: absolute;
          inset: 0;
          background-image:
            repeating-linear-gradient(0deg,   rgba(191,155,95,.06) 0, rgba(191,155,95,.06) 1px, transparent 1px, transparent 80px),
            repeating-linear-gradient(90deg,  rgba(191,155,95,.06) 0, rgba(191,155,95,.06) 1px, transparent 1px, transparent 80px);
        }

        .hero__large-text {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          font-family: var(--font-serif);
          font-size: 280px;
          color: rgba(255,255,255,.025);
          font-weight: 400;
          font-style: italic;
          white-space: nowrap;
          pointer-events: none;
          user-select: none;
        }

        .hero__panel-content {
          position: relative;
          z-index: 2;
          animation: fadeUp 0.9s 0.15s var(--ease-out) both;
        }

        .hero__tag {
          display: inline-block;
          border: 1px solid rgba(191, 155, 95, 0.45);
          padding: 10px 22px;
          color: var(--gold-light);
          font-size: 9px;
          letter-spacing: 4px;
          text-transform: uppercase;
          margin-bottom: 24px;
        }

        .hero__stats {
          display: flex;
          gap: 40px;
        }

        /* ── Scroll hint ──────────────────────── */
        .hero__scroll {
          position: absolute;
          bottom: 36px;
          left: 26%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          z-index: 10;
        }
        .hero__scroll-line {
          display: block;
          width: 1px;
          height: 52px;
          background: linear-gradient(to bottom, var(--wine), transparent);
          animation: scrollLine 2s ease-in-out infinite;
        }
        .hero__scroll-label {
          font-size: 9px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--mid-gray);
          writing-mode: vertical-rl;
          transform: rotate(180deg);
        }

        /* ── Responsive ───────────────────────── */
        @media (max-width: 1024px) {
          .hero { grid-template-columns: 1fr; min-height: auto; }
          .hero__right { min-height: 420px; }
          .hero__left { padding: 60px 32px; }
          .hero__scroll { display: none; }
        }

        @media (max-width: 640px) {
          .hero__heading { font-size: 44px; }
          .hero__stats { gap: 24px; }
        }
      `}</style>
    </section>
  )
}

function HeroStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="stat">
      <div className="stat__value">{value}</div>
      <div className="stat__label">{label}</div>
      <style jsx>{`
        .stat {
          border-left: 1px solid rgba(191, 155, 95, 0.3);
          padding-left: 18px;
        }
        .stat__value {
          font-family: var(--font-serif);
          font-size: 26px;
          font-weight: 400;
          color: #fff;
          line-height: 1;
        }
        .stat__label {
          font-size: 9px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.4);
          margin-top: 6px;
        }
      `}</style>
    </div>
  )
}
