import Link from 'next/link'
import { WA_LINK } from '@/lib/products'

export default function CtaStrip() {
  return (
    <div className="cta" role="complementary" aria-label="Call to action">
      <div className="cta__inner">
        <div className="cta__left">
          <p className="cta__heading">
            Ready to find your <em>perfect look?</em>
          </p>
          <p className="cta__sub">Chat with us directly — no forms, no waiting.</p>
        </div>

        <div className="cta__actions">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="cta__btn-white"
          >
            <WhatsAppIcon />
            Chat on WhatsApp
          </a>
          <Link href="/collections/so-fly" className="cta__btn-outline">
            Browse Shop
          </Link>
        </div>
      </div>

      <style jsx>{`
        .cta {
          background: var(--wine);
          position: relative;
          overflow: hidden;
        }
        .cta::before {
          content: '';
          position: absolute;
          right: -120px; top: 50%;
          transform: translateY(-50%);
          width: 400px; height: 400px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,.06);
          pointer-events: none;
        }
        .cta::after {
          content: '';
          position: absolute;
          right: -60px; top: 50%;
          transform: translateY(-50%);
          width: 280px; height: 280px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,.04);
          pointer-events: none;
        }
        .cta__inner {
          max-width: 1400px;
          margin: 0 auto;
          padding: 60px var(--space-lg);
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          z-index: 2;
        }
        .cta__heading {
          font-family: var(--font-serif);
          font-size: clamp(26px, 3vw, 36px);
          font-weight: 400;
          color: #fff;
          line-height: 1.25;
          margin-bottom: 8px;
        }
        .cta__heading em { font-style: italic; }
        .cta__sub {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.55);
          font-weight: 300;
          letter-spacing: 0.3px;
        }
        .cta__actions {
          display: flex;
          gap: 14px;
          flex-shrink: 0;
        }
        .cta__btn-white {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #fff;
          color: var(--wine);
          padding: 13px 26px;
          font-size: 10px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          font-weight: 500;
          text-decoration: none;
          transition: background 0.25s;
          font-family: var(--font-sans);
        }
        .cta__btn-white:hover { background: var(--gold-pale); }
        .cta__btn-outline {
          display: inline-flex;
          align-items: center;
          border: 1px solid rgba(255,255,255,.35);
          color: #fff;
          padding: 13px 26px;
          font-size: 10px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          font-weight: 300;
          text-decoration: none;
          transition: border-color 0.25s;
          font-family: var(--font-sans);
        }
        .cta__btn-outline:hover { border-color: rgba(255,255,255,.85); }
        @media (max-width: 768px) {
          .cta__inner { flex-direction: column; gap: 32px; align-items: flex-start; }
        }
      `}</style>
    </div>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}
