import {groq} from 'next-sanity'

export const productsQuery = groq`
  *[_type == "product"] | order(_createdAt desc) {
    _id,
    name,
    price,
    description,
    image,
    category,
    "slug": slug.current
  }
`

export const productBySlugQuery = groq`
  *[_type == "product" && slug.current == $slug][0] {
    _id,
    name,
    price,
    description,
    image,
    category,
    "slug": slug.current
  }
`