import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const baseUrl = 'https://hsgatelangana.com'; // Official base URL

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/admin/', '/private/'], // Example disallowed paths
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
