import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { LocaleContext } from './Layout'
import locales from '../../config/i18n'

const LocalizedLink = ({ to, forceLocale, ...props }) => {
  const localeContext = React.useContext(LocaleContext)
  const localeFromContext = localeContext.locale ? localeContext.locale : 'de-de'
  const locale = forceLocale ? forceLocale : localeFromContext
  const isIndex = to === '/'
  const path = locales[locale].default ? to : `/${locales[locale].path}${isIndex ? '' : `${to}`}`

  if (forceLocale) {
    console.log('locale: ', forceLocale)
    console.log('to: ', to)
    console.log('path: ', path)
  }

  return <Link {...props} to={path} />
}

export default LocalizedLink

LocalizedLink.propTypes = {
  to: PropTypes.string.isRequired,
}
