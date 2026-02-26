import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://hsgatelangana.com'; // Official base URL

    const routes = [
        '',
        '/about',
        '/about/mission-vision',
        '/state-team',
        '/prashiksham',
        '/resources',
        '/gallery',
        '/blogs',
        '/careers',
        '/contact',
        '/contact/form',
        '/get-started',
        '/privacy-policy',
        '/terms-conditions',
        '/site-map',
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : 'monthly',
        priority: route === '' ? 1 : 0.8,
    }));
}
