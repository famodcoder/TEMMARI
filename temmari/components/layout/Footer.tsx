import Link from 'next/link'
import { WA_LINK } from '@/lib/products'

const COLLECTIONS = [
  { label: '"So Fly" Collection', href: '/collections/so-fly' },
  { label: "Men's Suits",         href: '/collections/mens'   },
  { label: "Women's Wear",        href: '/collections/womens' },
  { label: 'Corporate Sets',      href: '/collections/corporate' },
  { label: 'Accessories',         href: '/collections/accessories' },
]

const SERVICES = [
  { label: 'Bespoke Tailoring',   href: '/bespoke'  },
  { label: 'Made to Measure',     href: '/bespoke'  },
  { label: 'Style Consultation',  href: '/contact'  },
  { label: 'Corporate Orders',    href: '/contact'  },
]

const COMPANY = [
  { label: 'About Temmari', href: '/about'   },
  { label: 'Size Guide',    href: '/about#sizes' },
  { label: 'Contact Us',    href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">

        <div className="footer__grid">
          {/* Brand col */}
          <div className="footer__brand">
            <div className="footer__logo">TEMM<em>ari</em></div>
            <div className="footer__tagline">Limitless Classic Styling</div>
            <p className="footer__desc">
              Sophisticated fashion for those who believe style is a birthright,
              not a privilege. Every body. Every budget. Every occasion.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__wa"
            >
              <WhatsAppIcon />
              +234 816 459 9116
            </a>
          </div>

          {/* Link cols */}
          <FooterCol title="Collections" links={COLLECTIONS} />
          <FooterCol title="Services"    links={SERVICES}    />
          <FooterCol title="Company"     links={COMPANY}     />
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Temmari. All rights reserved.</span>
          <span>Designed with passion in Nigeria</span>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: var(--slate);
          padding: 80px 0 36px;
        }
        .footer__inner {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 56px;
        }
        .footer__grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 56px;
          padding-bottom: 56px;
          border-bottom: 1px solid var(--border-white);
          margin-bottom: 36px;
        }
        .footer__logo {
          font-family: var(--font-serif);
          font-size: 26px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #fff;
          font-weight: 400;
          margin-bottom: 6px;
        }
        .footer__logo em {
          color: var(--gold-light);
          font-style: italic;
        }
        .footer__tagline {
          font-size: 9px;
          letter-spacing: 3.5px;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 16px;
          font-weight: 300;
        }
        .footer__desc {
          font-size: 13px;
          line-height: 1.85;
          color: rgba(255, 255, 255, 0.35);
          font-weight: 300;
          max-width: 260px;
          margin-bottom: 24px;
        }
        .footer__wa {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          color: var(--gold-light);
          text-decoration: none;
          transition: color 0.25s;
        }
        .footer__wa:hover { color: var(--gold); }
        .footer__bottom {
          display: flex;
          justify-content: space-between;
          font-size: 11px;
          color: rgba(255, 255, 255, 0.22);
          font-weight: 300;
        }
        @media (max-width: 1024px) {
          .footer__grid { grid-template-columns: 1fr 1fr; gap: 40px; }
          .footer__inner { padding: 0 32px; }
        }
        @media (max-width: 640px) {
          .footer__grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </footer>
  )
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="col-title">{title}</h3>
      <ul className="col-links">
        {links.map(({ label, href }) => (
          <li key={href}>
            <Link href={href} className="col-link">{label}</Link>
          </li>
        ))}
      </ul>
      <style jsx>{`
        .col-title {
          font-size: 9px;
          letter-spacing: 3.5px;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.25);
          margin-bottom: 18px;
          font-weight: 400;
        }
        .col-links { list-style: none; }
        .col-links li { margin-bottom: 11px; }
        .col-link {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.45);
          text-decoration: none;
          font-weight: 300;
          transition: color 0.25s;
        }
        .col-link:hover { color: var(--gold-light); }
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
