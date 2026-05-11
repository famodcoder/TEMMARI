import Link from 'next/link'
import ProductCard from '@/components/ui/ProductCard'
import { products } from '@/lib/products'

export default function FeaturedCollection() {
  const featured = products.slice(0, 4)

  return (
    <section className="featured" aria-labelledby="featured-heading">
      <div className="featured__inner">

        <div className="featured__header">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" />
              <span className="eyebrow-text">Featured</span>
            </div>
            <h2 id="featured-heading" className="section-heading">
              The <em>&ldquo;So Fly&rdquo;</em> Collection
            </h2>
          </div>
          <Link href="/collections/so-fly" className="featured__view-all">
            View All Pieces
          </Link>
        </div>

        <div className="featured__grid">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .featured {
          padding: var(--space-xl) 0;
          background: var(--off-white);
        }
        .featured__inner {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 var(--space-lg);
        }
        .featured__header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 56px;
        }
        .featured__view-all {
          font-size: 10px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--mid-gray);
          text-decoration: none;
          border-bottom: 1px solid var(--warm-gray);
          padding-bottom: 3px;
          transition: color 0.25s, border-color 0.25s;
          align-self: flex-end;
          white-space: nowrap;
        }
        .featured__view-all:hover {
          color: var(--wine);
          border-color: var(--wine);
        }
        .featured__grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        @media (max-width: 1024px) {
          .featured__grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .featured__grid { grid-template-columns: 1fr; }
          .featured__header { flex-direction: column; align-items: flex-start; gap: 16px; }
        }
      `}</style>
    </section>
  )
}
