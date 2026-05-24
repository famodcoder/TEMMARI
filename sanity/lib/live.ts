// Live preview not available in next-sanity v9
// Using standard client fetch instead
export const sanityFetch = async (query: string, params = {}) => {
  const { client } = await import('./client')
  return client.fetch(query, params)
}

export const SanityLive = () => null