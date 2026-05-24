import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Collections — Temmari',
  description: 'Explore Temmari collections and curated looks for every occasion.',
}

const COLLECTIONS = [
  { slug: 'so-fly', label: 'So Fly Collection' },
  { slug: 'mens', label: "Men's Wear" },
  { slug: 'womens', label: "Women's Wear" },
  { slug: 'corporate', label: 'Corporate Sets' },
  { slug: 'accessories', label: 'Accessories' },
]

export default function CollectionsPage() {
  return (
    <main className="page page--collections">
      <div className="page__inner">
        <div className="eyebrow">
          <span className="eyebrow-line" />
          <span className="eyebrow-text">Collections</span>
        </div>
        <h1 className="section-heading">Browse our curated collections.</h1>
        <div className="collections__grid">
          {COLLECTIONS.map((collection) => (
            <Link key={collection.slug} href={`/collections/${collection.slug}`} className="collection-card">
              <span>{collection.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
