/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://scanpeau.vercel.app",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/_next/"],
      },
    ],
    additionalSitemaps: ["https://scanpeau.vercel.app/sitemap.xml"],
  },
  exclude: ["/api/*", "/admin/*", "/_next/*"],
  changefreq: "daily",
  priority: 0.7,
  sitemapSize: 5000,
  generateIndexSitemap: false,
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    }
  },
}
