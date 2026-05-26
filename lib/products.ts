import type { Product, Collection, Category } from '@/types'
import { client } from '@/lib/sanity'
import { productsQuery, productBySlugQuery, collectionProductsQuery } from '@/lib/queries'

// Categories stay hardcoded — these are navigation, not content
export const categories: Category[] = [
  {
    id: 'mens',
    name: 'Suits & Blazers',
    label: "Men's Wear",
    href: '/collections/mens',
    placeholderClass: 'cb-1',
  },
  {
    id: 'womens',
    name: 'Power Dressing',
    label: "Women's Wear",
    href: '/collections/womens',
    placeholderClass: 'cb-2',
  },
  {
    id: 'corporate',
    name: 'Complete Looks',
    label: 'Corporate Sets',
    href: '/collections/corporate',
    placeholderClass: 'cb-3',
  },
]

// Fetch all products from Sanity
export async function getProducts(): Promise<Product[]> {
  try {
    return await client.fetch(productsQuery)
  } catch (error) {
    console.error('Failed to fetch products:', error)
    return []
  }
}

// Fetch single product by slug
export async function getProductBySlug(slug: string): Promise<Product | null> {
  try {
    return await client.fetch(productBySlugQuery, { slug })
  } catch (error) {
    console.error('Failed to fetch product:', error)
    return null
  }
}

// Fetch products filtered by collection
export async function getProductsForCollection(collectionSlug: string): Promise<Product[]> {
  try {
    // so-fly collection shows all products
    if (collectionSlug === 'so-fly') {
      return await getProducts()
    }

    // Map collection slugs to Sanity category values
    const categoryMap: Record<string, string> = {
      mens: "Men's Suits",
      womens: "Women's Collection",
      corporate: 'Corporate',
      accessories: 'Accessories',
    }

    const category = categoryMap[collectionSlug]
    if (!category) return []

    return await client.fetch(collectionProductsQuery, { category })
  } catch (error) {
    console.error('Failed to fetch collection products:', error)
    return []
  }
}

export function formatPrice(amount: number): string {
  return `₦${amount.toLocaleString('en-NG')}`
}

export const WA_NUMBER = process.env.NEXT_PUBLIC_WA_NUMBER ?? '2348164599116'
export const WA_LINK = `https://wa.me/${WA_NUMBER}`