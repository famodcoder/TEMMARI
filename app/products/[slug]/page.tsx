import Image from 'next/image'
import { notFound } from 'next/navigation'
import { formatPrice, getProductBySlug, WA_LINK } from '@/lib/products'
import { urlFor } from '@/lib/sanity'

function getImageUrl(image?: string | Record<string, unknown>) {
  if (!image) return undefined
  if (typeof image === 'string') return image
  return urlFor(image).width(1200).height(1200).auto('format').url()
}

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product = await getProductBySlug(params.slug)

  if (!product) {
    return notFound()
  }

  const imageUrl = getImageUrl(product.image)

  return (
    <main className="page page--product">
      <div className="page__inner">
        <div className="eyebrow">
          <span className="eyebrow-line" />
          <span className="eyebrow-text">{product.category}</span>
        </div>
        <h1 className="section-heading">{product.name}</h1>
        {imageUrl && (
          <div className="page__product-image">
            <Image
              src={imageUrl}
              alt={product.name}
              width={1200}
              height={1200}
              className="product__image"
              style={{ objectFit: 'cover' }}
            />
          </div>
        )}
        <p className="page__intro">{product.description}</p>

        <div className="product__meta">
          <p><strong>Fabric:</strong> {product.fabric}</p>
          {product.sizes && <p><strong>Sizes:</strong> {product.sizes.join(', ')}</p>}
          {product.colors && <p><strong>Colors:</strong> {product.colors.join(', ')}</p>}
          <p><strong>Price:</strong> {formatPrice(product.price)}</p>
        </div>

        <a href={`${WA_LINK}?text=${encodeURIComponent(`Hi! I want to order: ${product.name}`)}`} target="_blank" rel="noopener noreferrer" className="btn btn-fill">
          Enquire on WhatsApp
        </a>
      </div>
    </main>
  )
}
