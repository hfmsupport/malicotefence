import { MetadataRoute } from 'next'

const BASE_URL = 'https://www.malicotefence.com'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL + '/', lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: BASE_URL + '/about', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: BASE_URL + '/contact', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: BASE_URL + '/gallery', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: BASE_URL + '/fences/wood-privacy', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: BASE_URL + '/fences/wood-picket', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: BASE_URL + '/fences/aluminum', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: BASE_URL + '/fences/chain-link', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: BASE_URL + '/fences/kentucky-board', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: BASE_URL + '/fences/pvc-vinyl', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
  ]
}
