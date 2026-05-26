import Link from 'next/link'
import ProductCard from '@/components/ui/ProductCard'
import { getProducts } from '@/lib/products'

export default async function FeaturedCollection() {
  const products = await getProducts()
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
          {featured.length > 0 ? (
            featured.map((product) => (
              <ProductCard key={product._id ?? product.id} product={product} />
            ))
          ) : (
            <p className="featured__empty">Products coming soon — check back shortly.</p>
          )}
        </div>
      </div>
    </section>
  )
}