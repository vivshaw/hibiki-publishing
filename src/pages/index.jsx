import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import SEO from '../components/SEO'
import { LocaleContext } from '../components/Layout'
import LocalizedLink from '../components/LocalizedLink'

const Index = ({ data: { homepage, social, posts, projects }, pageContext: { locale }, location }) => {
  const lang = React.useContext(LocaleContext)
  const i18n = lang.i18n[lang.locale]

  return (
    <>
      <SEO pathname={location.pathname} locale={locale} />

      <section className="hero">
        <div>
          <h1 className="hero-header">{homepage.data.title.text}</h1>
          <h4 className="hero-header">{homepage.data.subheader.text}</h4>
          <LocalizedLink to={'/faq'} class="round-btn">
            {i18n.learnMore}
          </LocalizedLink>
        </div>
      </section>

      <section className="section">
        <h4>{i18n.whatWeDo}</h4>
        <div dangerouslySetInnerHTML={{ __html: homepage.data.content.html }} />
      </section>

      <section className="section">
        <h4>{homepage.data.email_cta.text}</h4>
        <input type="text" placeholder="Email" />
      </section>

      {/*<div>
        {social.edges[0].node.data.body.map((s, index) => (
          <li data-name={`social-entry-${index}`} key={s.primary.label.text}>
            <a href={s.primary.link.url}>{s.primary.label.text}</a>
          </li>
        ))}
      </div>
      <div style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <div style={{ marginTop: '4rem' }}>{i18n.recent} Posts</div>
        <div posts={posts.edges} />

        <div style={{ marginTop: '8rem' }}>
          {i18n.recent} {i18n.projects}
        </div>

        <div>
          {projects.edges[0].node.data.body.map(project => (
            <li key={project.primary.label.text}>
              <a href={project.primary.link.url}>{project.primary.label.text}</a>
            </li>
          ))}
        </div>
          </div>*/}
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
  query IndexQuery($locale: String!) {
    homepage: prismicHomepage(lang: { eq: $locale }) {
      data {
        title {
          text
        }
        subheader {
          text
        }
        email_cta {
          text
        }
        content {
          html
        }
        footer {
          html
        }
      }
    }
    social: allPrismicHeroLinks(filter: { lang: { eq: $locale } }) {
      edges {
        node {
          data {
            body {
              primary {
                label {
                  text
                }
                link {
                  url
                }
              }
            }
          }
        }
      }
    }
    posts: allPrismicPost(sort: { fields: [data___date], order: DESC }, filter: { lang: { eq: $locale } }) {
      edges {
        node {
          uid
          data {
            title {
              text
            }
            date(formatString: "DD.MM.YYYY")
            categories {
              category {
                document {
                  data {
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
    projects: allPrismicProjects(filter: { lang: { eq: $locale } }) {
      edges {
        node {
          data {
            body {
              primary {
                label {
                  text
                }
                link {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`
