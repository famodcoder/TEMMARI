import Link from 'next/link'
import Image from 'next/image'
import type { Product } from '@/types'
import { formatPrice, WA_LINK } from '@/lib/products'

interface ProductCardProps {
  product: Product
}

/**
 * Temporary placeholder gradients until real product photos are available.
 * Replace these with Next.js <Image> once photos are uploaded.
 */
const PLACEHOLDER_STYLES: Record<string, string> = {
  'pi-1': 'linear-gradient(155deg, #1C1A2E 0%, #2E1828 45%, #7C1C3A 100%)',
  'pi-2': 'linear-gradient(155deg, #5A1028 0%, #7C1C3A 50%, #9E3050 100%)',
  'pi-3': 'linear-gradient(155deg, #0D1B2A 0%, #1C1A2E 55%, #2E2A45 100%)',
  'pi-4': 'linear-gradient(155deg, #2A1F10 0%, #4A3520 60%, #BF9B5F 100%)',
}

export default function ProductCard({ product }: ProductCardProps) {
  const { slug, name, category, price, badge, placeholderClass, image } = product
  const waMessage = encodeURIComponent(`Hi! I'm interested in: ${name} (₦${price.toLocaleString()})`)
  const waUrl = `${WA_LINK}?text=${waMessage}`

  return (
    <article className="card">
      <Link href={`/products/${slug}`} className="card__image-link" tabIndex={-1} aria-hidden="true">
        <div className="card__image">

          {/* Product image — swap placeholder with real image when ready */}
          {image ? (
            <Image
              src={image}
              alt={name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="card__img"
              style={{ objectFit: 'cover' }}
            />
          ) : (
            <div
              className="card__placeholder"
              style={{ background: PLACEHOLDER_STYLES[placeholderClass ?? 'pi-1'] }}
            />
          )}

          {badge && <span className="card__badge">{badge}</span>}

          {/* Hover actions */}
          <div className="card__actions">
            <a href={waUrl} target="_blank" rel="noopener noreferrer" className="card__action-btn">
              Enquire on WhatsApp
            </a>
            <Link href={`/products/${slug}#quote`} className="card__action-btn">
              Request a Quote
            </Link>
          </div>
        </div>
      </Link>

      <div className="card__meta">
        <p className="card__category">{category}</p>
        <h3 className="card__name">
          <Link href={`/products/${slug}`}>{name}</Link>
        </h3>
        <p className="card__price">{formatPrice(price)}</p>
      </div>

      <style jsx>{`
        .card { cursor: pointer; }

        .card__image-link { display: block; }

        .card__image {
          aspect-ratio: 0.72;
          position: relative;
          overflow: hidden;
          margin-bottom: 16px;
          background: var(--warm-gray);
        }

        .card__placeholder {
          position: absolute;
          inset: 0;
          transition: transform 0.65s var(--ease-out);
        }

        :global(.card__img) {
          transition: transform 0.65s var(--ease-out) !important;
        }

        .card:hover .card__placeholder,
        .card:hover :global(.card__img) {
          transform: scale(1.06);
        }

        .card__badge {
          position: absolute;
          top: 14px; left: 14px;
          background: var(--wine);
          color: #fff;
          font-size: 8px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          padding: 5px 11px;
          z-index: 2;
          font-weight: 400;
        }

        .card__actions {
          position: absolute;
          inset-x: 0; bottom: 0;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 7px;
          opacity: 0;
          transform: translateY(8px);
          transition: opacity 0.3s ease, transform 0.3s ease;
          z-index: 2;
          background: linear-gradient(to top, rgba(13,11,14,0.72) 0%, transparent 100%);
        }

        .card:hover .card__actions {
          opacity: 1;
          transform: translateY(0);
        }

        .card__action-btn {
          display: block;
          background: rgba(250, 248, 245, 0.92);
          border: none;
          padding: 9px 12px;
          font-size: 8px;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-family: var(--font-sans);
          font-weight: 400;
          color: var(--slate);
          text-align: center;
          text-decoration: none;
          transition: background 0.2s, color 0.2s;
          cursor: pointer;
        }

        .card__action-btn:hover {
          background: var(--wine);
          color: #fff;
        }

        .card__meta { padding: 0 2px; }

        .card__category {
          font-size: 9px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--mid-gray);
          margin-bottom: 6px;
          font-weight: 300;
        }

        .card__name {
          font-family: var(--font-serif);
          font-size: 17px;
          font-weight: 400;
          color: var(--slate);
          margin-bottom: 7px;
          line-height: 1.3;
        }

        .card__name a {
          text-decoration: none;
          color: inherit;
          transition: color 0.25s;
        }

        .card__name a:hover { color: var(--wine); }

        .card__price {
          font-size: 13px;
          color: var(--wine);
          font-weight: 400;
          letter-spacing: 0.5px;
        }
      `}</style>
    </article>
  )
}
