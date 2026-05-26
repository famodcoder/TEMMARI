import { client } from '@/lib/sanity'
import { productsQuery } from '@/lib/queries'

export async function GET() {
  const products = await client.fetch(productsQuery)
  return Response.json({ count: products.length, products })
}