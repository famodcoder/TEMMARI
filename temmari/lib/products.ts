import type { Product, Collection, Category } from '@/types'

export const products: Product[] = [
  {
    id: '1',
    slug: 'sovereign-suit',
    name: 'The Sovereign Suit',
    category: "Men's Suits",
    price: 95000,
    badge: 'New Arrival',
    placeholderClass: 'pi-1',
    description: 'A masterwork in structured tailoring. Clean lapels, precise shoulder seams, and a silhouette built to command.',
    fabric: 'Premium wool-blend',
    sizes: ['S', 'M', 'L', 'XL', 'XXL', 'Custom'],
    colors: ['Navy', 'Charcoal', 'Black'],
    isBespoke: true,
  },
  {
    id: '2',
    slug: 'crimson-power-set',
    name: 'Crimson Power Set',
    category: "Women's Collection",
    price: 78000,
    placeholderClass: 'pi-2',
    description: 'Bold, refined, unapologetic. This two-piece set redefines what it means to walk into a room.',
    fabric: 'High-twist crepe',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'Custom'],
    colors: ['Crimson', 'Burgundy'],
    isBespoke: true,
  },
  {
    id: '3',
    slug: 'navy-boardroom-blazer',
    name: 'Navy Boardroom Blazer',
    category: 'Corporate',
    price: 55000,
    badge: 'Bestseller',
    placeholderClass: 'pi-3',
    description: 'The definitive corporate blazer. Structured enough for the boardroom, versatile enough for everywhere else.',
    fabric: 'Italian-finish polyester blend',
    sizes: ['S', 'M', 'L', 'XL', 'XXL', 'Custom'],
    colors: ['Navy', 'Black', 'Slate'],
    isBespoke: true,
  },
  {
    id: '4',
    slug: 'gold-meridian-pocket-square',
    name: 'Gold Meridian Pocket Square',
    category: 'Accessories',
    price: 8500,
    placeholderClass: 'pi-4',
    description: 'The final touch. Hand-folded silk with a warm gold finish that elevates any suit.',
    fabric: 'Silk-satin',
    colors: ['Gold', 'Ivory', 'Wine'],
  },
]

export const soFlyCollection: Collection = {
  id: 'so-fly',
  slug: 'so-fly',
  name: '"So Fly"',
  tagline: 'Our debut collection — where confidence meets craft.',
  products,
}

export const categories: Category[] = [
  {
    id: 'mens',
    name: "Suits & Blazers",
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

export function formatPrice(amount: number): string {
  return `₦${amount.toLocaleString('en-NG')}`
}

export const WA_NUMBER = process.env.NEXT_PUBLIC_WA_NUMBER ?? '2348164599116'
export const WA_LINK   = `https://wa.me/${WA_NUMBER}`
