import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import SEO from '../components/SEO'
import { LocaleContext } from '../components/Layout'

const Index = ({ data: { page }, pageContext: { locale }, location }) => {
  const lang = React.useContext(LocaleContext)
  const i18n = lang.i18n[lang.locale]

  return (
    <>
      <SEO pathname={location.pathname} locale={locale} />

      <section className="section">
        <h2>{page.data.title.text}</h2>
        <div dangerouslySetInnerHTML={{ __html: page.data.page_content.html }} />
      </section>
    </>
  )
}

export default Index

Index.propTypes = {
  data: PropTypes.shape({
    posts: PropTypes.object.isRequired,
    homepage: PropTypes.object.isRequired,
    social: PropTypes.object.isRequired,
    projects: PropTypes.object.isRequired,
  }).isRequired,
  pageContext: PropTypes.shape({
    locale: PropTypes.string.isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
}

export const pageQuery = graphql`
  query PageBySlug($uid: String!, $locale: String!) {
    page: prismicPage(uid: { eq: $uid }, lang: { eq: $locale }) {
      uid
      data {
        title {
          text
        }
        page_content {
          html
        }
      }
    }
  }
`
