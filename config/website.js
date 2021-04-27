module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Hibiki Translations', // Navigation and Site Title
  titleAlt: 'Hibiki Translations', // Title for JSONLD
  description: 'A manga translation group.',
  headline: 'Translating manga', // Headline for schema.org JSONLD
  url: 'https://www.hibiki-publishing.com', // Domain of your site. No trailing slash!
  logo: '/logos/hibiki-logo.png', // Used for SEO
  ogLanguage: 'en_US', // Facebook Language

  // JSONLD / Manifest
  // TODO: Need a better, square favicon
  favicon: 'src/images/favicon.png', // Used for manifest favicon generation
  shortName: 'Hibiki', // shortname for manifest. MUST be shorter than 12 characters
  author: 'Hibiki Translations', // Author for schemaORGJSONLD
  themeColor: '#cf338b',
  backgroundColor: '#ab58c8',

  twitter: '@hibikipub', // Twitter Username
  facebook: '', // Facebook Site Name
  googleAnalyticsID: 'UA-X',

  skipNavId: 'reach-skip-nav', // ID for the "Skip to content" a11y feature

  contactEmail: 'contact@hibiki-publishing.com',
}
