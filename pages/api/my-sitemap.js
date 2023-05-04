const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');

export default async (req, res) => {
  // An array with your links
  const links = [
    { url: 'https://www.ethiostaramerica.com/', changefreq: 'daily', priority: 1.00 },
    { url: 'https://www.ethiostaramerica.com/about', changefreq: 'daily', priority: 1.00 },
    { url: 'https://www.ethiostaramerica.com/services/', changefreq: 'daily', priority: 1.00 },
    { url: 'https://www.ethiostaramerica.com/industries/', changefreq: 'daily', priority: 1.00 },
    { url: 'https://www.ethiostaramerica.com/quote', changefreq: 'daily', priority: 1.00 },
    { url: 'https://www.ethiostaramerica.com/services/translation/', changefreq: 'daily', priority: 1.00 },
    { url: 'https://www.ethiostaramerica.com/services/localization/', changefreq: 'daily', priority: 1.00 },
    { url: 'https://www.ethiostaramerica.com/services/interpretation/', changefreq: 'daily', priority: 1.00 },
    { url: 'https://www.ethiostaramerica.com/services/audioservices/', changefreq: 'daily', priority: 1.00 },
    { url: 'https://www.ethiostaramerica.com/services/dtp/', changefreq: 'daily', priority: 1.00 },
    { url: 'https://www.ethiostaramerica.com/services/machine/', changefreq: 'daily', priority: 1.00 },
  ];

  // Create a stream to write to
  const stream = new SitemapStream({ hostname: `https://${req.headers.host}` });

  res.writeHead(200, {
    'Content-Type': 'application/xml',
  });

  const xmlString = await streamToPromise(
    Readable.from(links).pipe(stream),
  ).then((data) => data.toString());

  res.end(xmlString);
};
