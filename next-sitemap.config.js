module.exports = {
  siteUrl: 'https://www.ethiostaramerica.com/',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    content: `
      User-agent: *
      Disallow:

      # Host
      Host: https://www.ethiostaramerica.com/

      # Sitemaps
      Sitemap: https://www.ethiostaramerica.com/sitemap.xml
    `,
  },
};
