import {groq} from 'next-sanity'

export const productsQuery = groq`
  *[_type == "product"] | order(_createdAt desc) {
    "_id": _id,
    "id": _id,
    name,
    price,
    description,
    image,
    category,
    "slug": slug.current,
    badge,
    fabric,
    sizes,
    colors,
    isBespoke,
    placeholderClass
  }
`

export const productBySlugQuery = groq`
  *[_type == "product" && slug.current == $slug][0] {
    "_id": _id,
    "id": _id,
    name,
    price,
    description,
    image,
    category,
    "slug": slug.current,
    badge,
    fabric,
    sizes,
    colors,
    isBespoke,
    placeholderClass
  }
`

export const collectionProductsQuery = groq`
  *[_type == "product" && category == $category] | order(_createdAt desc) {
    "_id": _id,
    "id": _id,
    name,
    price,
    description,
    image,
    category,
    "slug": slug.current,
    badge,
    fabric,
    sizes,
    colors,
    isBespoke,
    placeholderClass
  }
`