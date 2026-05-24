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

    </section>
  )
}
