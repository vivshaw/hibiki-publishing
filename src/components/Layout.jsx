/* eslint no-unused-expressions: 0 */
/* eslint react/destructuring-assignment: 0 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'emotion-theming'
import '@reach/skip-nav/styles.css'

import Footer from './Footer'
import SkipNavLink from './SkipNavLink'
import { theme } from '../styles'
import i18n from '../../config/i18n'

import 'typeface-lora'
import 'typeface-source-sans-pro'
import { Header } from '.'
import "../scss/main.scss";

const LocaleContext = React.createContext()

const Layout = ({ children, pageContext: { locale } }) => {
  const data = useStaticQuery(query)
  const footer = data.allPrismicHomepage.edges
    .filter(edge => edge.node.lang === locale)
    .map(r => r.node.data.footer.html)
    .toString()

  return (
    <LocaleContext.Provider value={{ locale, i18n }}>
      <ThemeProvider theme={theme}>
        <>
          <SkipNavLink />
          <Header />
          <main className="main-body">{children}</main>
          <Footer />
        </>
      </ThemeProvider>
    </LocaleContext.Provider>
  )
}

export { LocaleContext, Layout }

const query = graphql`
  query LayoutQuery {
    allPrismicHomepage {
      edges {
        node {
          lang
          data {
            footer {
              html
            }
          }
        }
      }
    }
  }
`

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
  pageContext: PropTypes.shape({
    locale: PropTypes.string.isRequired,
  }).isRequired,
}
