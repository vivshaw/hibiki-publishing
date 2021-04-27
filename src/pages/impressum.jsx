import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/SEO'
import { LocaleContext } from '../components/Layout'

const Impressum = ({ data: { impressum }, pageContext: { locale }, location }) => {
  // TODO: This should be a hook, probably
  const lang = React.useContext(LocaleContext)
  const i18n = lang.i18n[lang.locale]

  return (
    <>
      <SEO pathname={location.pathname} locale={locale} />

      <section className="section">
        <h2>{i18n.impressum}</h2>
        <div dangerouslySetInnerHTML={{ __html: impressum.data.impressum_content.html }} />
      </section>
    </>
  )
}

export default Impressum

export const pageQuery = graphql`
  query ImpressumQuery($locale: String!) {
    impressum: prismicImpressum(lang: { eq: $locale }) {
      data {
        impressum_content {
          html
        }
      }
    }
  }
`
