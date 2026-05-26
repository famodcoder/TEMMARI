import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Product Name', type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name' }, validation: Rule => Rule.required() }),
    defineField({ name: 'price', title: 'Price', type: 'number', validation: Rule => Rule.required().positive() }),
    defineField({ name: 'category', title: 'Category', type: 'string', options: { list: ["Men's Suits", "Women's Collection", 'Corporate', 'Accessories'] }}),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 4 }),
    defineField({ name: 'image', title: 'Product Image', type: 'image', options: { hotspot: true }}),
    defineField({ name: 'badge', title: 'Badge', type: 'string', options: { list: ['New Arrival', 'Bestseller', 'Limited'] }}),
    defineField({ name: 'fabric', title: 'Fabric', type: 'string' }),
    defineField({ name: 'sizes', title: 'Sizes', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'colors', title: 'Colors', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'isBespoke', title: 'Bespoke Available', type: 'boolean' }),
  ]
})