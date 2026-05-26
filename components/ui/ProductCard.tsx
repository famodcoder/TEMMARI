'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import type { Product } from '@/types'
import { formatPrice, WA_LINK } from '@/lib/products'
import { urlFor } from '@/lib/sanity'

interface ProductCardProps {
  product: Product
}

const PLACEHOLDER_STYLES: Record<string, string> = {
  'pi-1': 'linear-gradient(155deg, #1C1A2E 0%, #2E1828 45%, #7C1C3A 100%)',
  'pi-2': 'linear-gradient(155deg, #5A1028 0%, #7C1C3A 50%, #9E3050 100%)',
  'pi-3': 'linear-gradient(155deg, #0D1B2A 0%, #1C1A2E 55%, #2E2A45 100%)',
  'pi-4': 'linear-gradient(155deg, #2A1F10 0%, #4A3520 60%, #BF9B5F 100%)',
}

function getImageUrl(image?: Product['image']) {
  if (!image) return undefined
  if (typeof image === 'string') return image
  return urlFor(image).width(600).height(800).fit('crop').url()
}

export default function ProductCard({ product }: ProductCardProps) {
  const { slug, name, category, price, badge, placeholderClass, description, image } = product
  const [expanded, setExpanded] = useState(false)
  const imageUrl = getImageUrl(image)
  const waMessage = encodeURIComponent(`Hi! I'm interested in: ${name} (₦${price.toLocaleString()})`)
  const waUrl = `${WA_LINK}?text=${waMessage}`

  const shortDesc = description && description.length > 72
    ? description.slice(0, 72) + '…'
    : description

  return (
    <article className="card">
      {/* Image */}
      <Link href={`/products/${slug}`} className="card__image-link" tabIndex={-1} aria-hidden="true">
        <div className="card__image">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="card__img"
              style={{ objectFit: 'cover', objectPosition: 'top center' }}
            />
          ) : (
            <div
              className="card__placeholder"
              style={{ background: PLACEHOLDER_STYLES[placeholderClass ?? 'pi-1'] }}
            />
          )}
          {badge && <span className="card__badge">{badge}</span>}
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

      {/* Meta */}
      <div className="card__meta">
        <p className="card__category">{category}</p>
        <h3 className="card__name">
          <Link href={`/products/${slug}`}>{name}</Link>
        </h3>

        {description && (
          <div className="card__desc-wrap">
            <p className="card__description">
              {expanded ? description : shortDesc}
            </p>
            {description.length > 72 && (
              <button
                className="card__readmore"
                onClick={() => setExpanded((v) => !v)}
                aria-label={expanded ? 'Show less' : 'Read more'}
              >
                {expanded ? 'Show less ↑' : 'Read more ↓'}
              </button>
            )}
          </div>
        )}

        <p className="card__price">{formatPrice(price)}</p>
      </div>
    </article>
  )
}