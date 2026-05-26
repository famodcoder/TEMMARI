'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { WA_LINK } from '@/lib/products'

const NAV_LINKS = [
  { label: 'Collections', href: '/collections'      },
  { label: 'Men',         href: '/collections/mens'   },
  { label: 'Women',       href: '/collections/womens' },
  { label: 'Bespoke',     href: '/bespoke'            },
  { label: 'About',       href: '/about'              },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">

        {/* Logo */}
        <Link href="/" className="navbar__logo" aria-label="Temmari — home">
          TEMMARI
        </Link>
        
        <button
          type="button"
          className="navbar__toggle"
          aria-expanded={menuOpen}
          aria-controls="navbar-menu"
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span className="sr-only">
            {menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          </span>
          <span aria-hidden="true">{menuOpen ? '×' : '☰'}</span>
        </button>

        {/* Nav links */}
        <nav id="navbar-menu" aria-label="Main navigation">
          <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="navbar__link"
                  onClick={() => setMenuOpen(false)}
                  style={{ textDecoration: 'none', display: 'inline-block' }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions */}
        <div className="navbar__actions">
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="navbar__wa">
            <WhatsAppIcon />
            Chat with us
          </a>
        </div>

      </div>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          background: rgba(250, 248, 245, 0.95);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(191, 155, 95, 0.15);
          transition: box-shadow 0.3s ease, background 0.3s ease;
        }
        .navbar--scrolled {
          background: rgba(250, 248, 245, 0.98);
          box-shadow: 0 1px 0 rgba(28, 26, 46, 0.06);
        }
        .navbar__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 56px;
          height: 72px;
        }
        .navbar__logo {
          font-family: 'Playfair Display SC', var(--font-serif);
          font-size: 16px;
          font-weight: 400;
          letter-spacing: 0.35em;
          line-height: 1.15;
          text-transform: uppercase;
          color: var(--slate);
          text-decoration: none;
          position: relative;
          padding-bottom: 4px;
          display: inline-block;
        }
        .navbar__logo::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 1px;
          background: rgba(124, 28, 58, 0.15);
          transform: scaleX(0);
          transform-origin: left center;
          transition: transform 0.3s ease;
        }
        .navbar__logo:hover::after {
          transform: scaleX(1);
        }
        .navbar__links {
          display: flex;
          gap: 36px;
          list-style: none;
        }
        .navbar__link {
          display: inline-block;
          font-size: 11px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--mid-gray);
          text-decoration: none;
          font-weight: 400;
          transition: color 0.25s ease;
          position: relative;
          padding-bottom: 2px;
        }
        .navbar__link::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 0;
          height: 2px;
          background: var(--wine);
          transition: width 0.3s var(--ease-out);
        }
        .navbar__link:hover { color: var(--wine); }
        .navbar__link:hover::after { width: 100%; }
        .navbar__actions {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .navbar__toggle {
          display: none;
          border: none;
          background: transparent;
          color: var(--slate);
          font-size: 28px;
          line-height: 1;
          padding: 8px;
          cursor: pointer;
        }
        .navbar__wa {
          display: flex;
          align-items: center;
          gap: 7px;
          background: var(--wine);
          color: #fff;
          padding: 9px 20px;
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-weight: 400;
          text-decoration: none;
          transition: background 0.25s ease;
        }
        .navbar__wa:hover { background: var(--wine-deep); }

        @media (max-width: 1024px) {
          .navbar__inner { padding: 0 32px; }
          .navbar__links { gap: 24px; }
        }

        @media (max-width: 768px) {
          .navbar__toggle {
            display: inline-flex;
            align-items: center;
            justify-content: center;
          }
          .navbar__links {
            position: absolute;
            top: 72px;
            left: 0;
            right: 0;
            display: flex;
            flex-direction: column;
            gap: 0;
            background: rgba(250, 248, 245, 0.98);
            border-bottom: 1px solid rgba(191, 155, 95, 0.15);
            max-height: 0;
            overflow: hidden;
            opacity: 0;
            transition: max-height 0.3s ease, opacity 0.3s ease;
            z-index: 99;
          }
          .navbar__links--open {
            max-height: 260px;
            opacity: 1;
          }
          .navbar__link {
            padding: 16px 24px;
          }
          .navbar__link::after {
            display: block;
          }
          .navbar__inner { padding: 0 24px; }
        }
      `}</style>
    </header>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}
