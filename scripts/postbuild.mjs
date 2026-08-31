import fs from 'node:fs';
import path from 'node:path';

const dist = path.resolve('dist');
const source = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');

const pages = [
  {
    route: '/services/residential-cleaning',
    title: 'Residential Cleaning Wellington | House & Home Cleaners | CareClean',
    description: 'Professional residential cleaning in Wellington for weekly, fortnightly, deep and one-off home cleans. Owner-operated, fully insured CareClean service.',
    service: 'Residential Cleaning',
  },
  {
    route: '/services/commercial-cleaning',
    title: 'Commercial Cleaning Wellington | Office Cleaners | CareClean',
    description: 'Reliable commercial and office cleaning in Wellington with flexible schedules, tailored cleaning specifications and owner-operated quality oversight.',
    service: 'Commercial Cleaning',
  },
  {
    route: '/services/move-out-cleaning',
    title: 'Move Out Cleaning Wellington | End of Tenancy Cleaners | CareClean',
    description: 'Detailed move-out and end-of-tenancy cleaning in Wellington, with optional oven, fridge and professional carpet cleaning. Request a CareClean quote.',
    service: 'Move-Out Cleaning',
  },
  {
    route: '/services/carpet-cleaning',
    title: 'Carpet Cleaning Wellington | Hot Water Extraction | CareClean',
    description: 'Professional carpet cleaning in Wellington using hot water extraction, pre-treatment and stain treatment for homes, rentals and workplaces.',
    service: 'Carpet Cleaning',
  },
];

function replaceMeta(html, page) {
  const url = `https://careclean.co.nz${page.route}`;
  html = html.replace(/<title>.*?<\/title>/s, `<title>${page.title}</title>`);
  html = html.replace(/<meta name="description" content="[^"]*"\s*\/>/, `<meta name="description" content="${page.description}" />`);
  html = html.replace(/<link rel="canonical" href="[^"]*"\s*\/>/, `<link rel="canonical" href="${url}" />`);
  html = html.replace(/<meta property="og:url" content="[^"]*"\s*\/>/, `<meta property="og:url" content="${url}" />`);
  html = html.replace(/<meta property="og:title" content="[^"]*"\s*\/>/, `<meta property="og:title" content="${page.title}" />`);
  html = html.replace(/<meta property="og:description" content="[^"]*"\s*\/>/, `<meta property="og:description" content="${page.description}" />`);
  html = html.replace(/<meta name="twitter:title" content="[^"]*"\s*\/>/, `<meta name="twitter:title" content="${page.title}" />`);
  html = html.replace(/<meta name="twitter:description" content="[^"]*"\s*\/>/, `<meta name="twitter:description" content="${page.description}" />`);
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${page.service} Wellington`,
    serviceType: page.service,
    url,
    description: page.description,
    areaServed: { '@type': 'AdministrativeArea', name: 'Wellington Region, New Zealand' },
    provider: { '@id': 'https://careclean.co.nz/#business' }
  };
  html = html.replace('</head>', `  <script type="application/ld+json">${JSON.stringify(schema)}</script>\n</head>`);
  return html;
}

for (const page of pages) {
  const dir = path.join(dist, page.route.replace(/^\//, ''));
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), replaceMeta(source, page));
}
