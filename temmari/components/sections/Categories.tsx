import Link from 'next/link'
import { categories } from '@/lib/products'

const PLACEHOLDER_GRADIENTS: Record<string, string> = {
  'cb-1': 'linear-gradient(160deg, #1C1A2E 0%, #5A1028 60%, #7C1C3A 100%)',
  'cb-2': 'linear-gradient(160deg, #0D1220 0%, #1C1A2E 100%)',
  'cb-3': 'linear-gradient(160deg, #7C1C3A 0%, #2E2A45 60%, #1C1A2E 100%)',
}

export default function Categories() {
  return (
    <section aria-labelledby="categories-heading">
      <div className="cats__header">
        <div className="eyebrow">
          <span className="eyebrow-line" />
          <span className="eyebrow-text">Shop by</span>
        </div>
        <h2 id="categories-heading" className="section-heading">
          Browse <em>Categories</em>
        </h2>
      </div>

      <div className="cats__grid">
        {categories.map((cat) => (
          <Link key={cat.id} href={cat.href} className="cat">
            <div
              className="cat__bg"
              style={{ background: PLACEHOLDER_GRADIENTS[cat.placeholderClass] }}
            />
            <div className="cat__overlay" />
            <div className="cat__body">
              <p className="cat__eyebrow">{cat.label}</p>
              <h3 className="cat__name">{cat.name}</h3>
              <span className="cat__cta">Explore</span>
            </div>
          </Link>
        ))}
      </div>

      <style jsx>{`
        .cats__header {
          max-width: 1400px;
          margin: 0 auto;
          padding: var(--space-xl) var(--space-lg) var(--space-md);
        }
        .cats__header .section-heading { margin-top: 4px; }

        .cats__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
          background: var(--off-white);
        }

        .cat {
          position: relative;
          overflow: hidden;
          aspect-ratio: 0.9;
          display: block;
          text-decoration: none;
        }

        .cat__bg {
          position: absolute;
          inset: 0;
          transition: transform 0.65s var(--ease-out);
        }

        .cat:hover .cat__bg { transform: scale(1.06); }

        .cat__overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(13,11,14,.88) 0%, transparent 55%);
        }

        .cat__body {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          padding: 36px 32px;
          z-index: 2;
        }

        .cat__eyebrow {
          font-size: 9px;
          letter-spacing: 3.5px;
          text-transform: uppercase;
          color: var(--gold-light);
          margin-bottom: 8px;
          font-weight: 300;
        }

        .cat__name {
          font-family: var(--font-serif);
          font-size: 28px;
          font-weight: 400;
          color: #fff;
          margin-bottom: 14px;
          line-height: 1.2;
        }

        .cat__cta {
          font-size: 9px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.5);
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          padding-bottom: 3px;
          display: inline-block;
          transition: color 0.25s, border-color 0.25s;
        }

        .cat:hover .cat__cta {
          color: var(--gold-light);
          border-color: var(--gold-light);
        }

        @media (max-width: 768px) {
          .cats__grid { grid-template-columns: 1fr; }
          .cat { aspect-ratio: 1.2; }
        }
      `}</style>
    </section>
  )
}
