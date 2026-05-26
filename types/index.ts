

export interface Product {
  _id?: string
  id: string
  slug: string
  name: string
  category: string
  price: number
  badge?: 'New Arrival' | 'Bestseller' | 'Limited'
  description?: string
  fabric?: string
  sizes?: string[]
  colors?: string[]
  careInstructions?: string
  isBespoke?: boolean
  /** Placeholder gradient class until real photos are ready */
  placeholderClass?: string
  image?: any
}

export interface Collection {
  id: string
  slug: string
  name: string
  tagline: string
  description?: string
  products: Product[]
}

export interface Category {
  id: string
  name: string
  label: string
  href: string
  placeholderClass: string
}
