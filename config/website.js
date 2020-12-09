module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Hibiki Translations', // Navigation and Site Title
  titleAlt: 'Hibiki Translations', // Title for JSONLD
  description: 'A manga translation group.',
  headline: 'Translating manga', // Headline for schema.org JSONLD
  url: 'https://prismic-i18n.lekoarts.de', // Domain of your site. No trailing slash!
  logo: '/logos/logo-1024.png', // Used for SEO
  ogLanguage: 'en_US', // Facebook Language

  // JSONLD / Manifest
  favicon: 'src/favicon.png', // Used for manifest favicon generation
  shortName: 'Hibiki', // shortname for manifest. MUST be shorter than 12 characters
  author: 'Hibiki Translations', // Author for schemaORGJSONLD
  themeColor: '#3D63AE',
  backgroundColor: '#EBEDF2',

  twitter: '@starter_prismicio-i18n', // Twitter Username
  facebook: 'gatsby-prismic-i18n', // Facebook Site Name
  googleAnalyticsID: 'UA-XXXXXX-X',

  skipNavId: 'reach-skip-nav', // ID for the "Skip to content" a11y feature
}
