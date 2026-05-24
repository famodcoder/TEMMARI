import { notFound } from 'next/navigation'
import ProductCard from '@/components/ui/ProductCard'
import { getProductsForCollection } from '@/lib/products'

const COLLECTIONS = {
  'so-fly': {
    title: 'So Fly Collection',
    description: 'Our debut collection of statement tailoring, ready-to-wear looks, and premium finishing.',
  },
  mens: {
    title: "Men's Suits & Blazers",
    description: 'Structured pieces built for credibility, comfort, and versatility.',
  },
  womens: {
    title: "Women's Wear",
    description: 'Bold, polished tailoring designed for confident dressing.',
  },
  corporate: {
    title: 'Corporate Sets',
    description: 'Work-ready ensembles that deliver authority and elegance.',
  },
  accessories: {
    title: 'Accessories',
    description: 'Signature finishing pieces to complete the look.',
  },
} as const

export default async function CollectionPage({ params }: { params: { slug: string } }) {
  const collection = COLLECTIONS[params.slug]

  if (!collection) {
    return notFound()
  }

  const products = await getProductsForCollection(params.slug)

  return (
    <main className="page page--collection">
      <div className="page__inner">
        <div className="eyebrow">
          <span className="eyebrow-line" />
          <span className="eyebrow-text">{collection.title}</span>
        </div>
        <h1 className="section-heading">{collection.title}</h1>
        <p className="page__intro">{collection.description}</p>

        {products.length > 0 ? (
          <div className="collection-products">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="page__section">
            <p>Explore our pieces and contact us for styling suggestions or bespoke requests.</p>
          </div>
        )}
      </div>
    </main>
  )
}
