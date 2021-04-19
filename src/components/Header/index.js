import React, { useState } from 'react'
import styled from '@emotion/styled'
import { graphql, Link, useStaticQuery } from 'gatsby'
import '../../scss/main.scss'
import Logo from '../../images/hibiki-logo4.svg'
import { LocaleContext } from '../Layout'
import LocalizedLink from '../LocalizedLink'

const LocaleSwitcher = styled.div`
  padding: 1rem;
  z-index: 4;
`

const HeaderCont = styled.div`
  @media (max-width: 767px) {
    .nav-cont {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      bottom: 0;
      right: 0;
      background-color: #fff;
      z-index: 2;
      transform: translateX(100%);
      transition: var(--transMed);

      ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    }

    .menu-open {
      position: relative;
      z-index: 2;

      .nav-cont {
        transform: translateX(0%);
      }
    }

    .header-cont {
      button {
        z-index: 3;
        font-size: 1.15rem;
      }
    }
  }

  .header-cont {
    z-index: 3;
    position: fixed;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    grid-template-columns: 200px auto;
    grid-gap: 1rem;
    padding: 1rem 2rem;
    background-color: #fff;

    .logo-cont {
      display: flex;
      flex-direction: column;
      justify-content: center;
      z-index: 3;
      height: a {
        display: inline-block;
        line-height: 2.5rem;
        color: var(--black);
        text-decoration: none;
        transition: var(--transMed);
        position: relative;

        &:hover {
          color: var(--primaryColor);
        }
      }

      img {
        vertical-align: middle;
        width: 75;

        @media (min-width: 768px) {
          width: 100px;
        }
      }

      h2 {
        margin: 0;
        font-size: 1.5rem;

        @media (min-width: 768px) {
          font-size: 1.75rem;
        }
      }
    }

    @media (min-width: 768px) {
      button {
        display: none;
      }
    }

    .nav-cont {
      ul {
        height: 100%;
        margin: 0;
        padding: 0;
        display: flex;

        li {
          padding-left: 2rem;
          margin-top: 1rem;
          margin-bottom: 1rem;
          font-size: 1.15rem;
          font-family: var(--sans);
          font-weight: 300;
        }
      }

      @media (min-width: 768px) {
        ul {
          align-items: center;
          li {
            padding-left: 2rem;
            justify-content: flex-end;
          }
        }
      }
    }
  }
`

const ListLink = props => (
  <li className="nav-link">
    <LocalizedLink to={props.to}>{props.children}</LocalizedLink>
  </li>
)

export default ({ location }) => {
  const lang = React.useContext(LocaleContext)
  const [menuStatus, menuChange] = useState(false)

  const delocalizedLocation = location.pathname.split('/')
  console.log(lang.locale)
  if (delocalizedLocation[1] === 'en' || delocalizedLocation[1] === 'jp') {
    delocalizedLocation.shift()
    delocalizedLocation.shift()
    delocalizedLocation.unshift('')
  }
  const newUrl = delocalizedLocation.join('/')
  const localeSwitcherUrl = newUrl ? newUrl : '/'

  const data = useStaticQuery(graphql`
    query HeaderQuery {
      links: allPrismicPage {
        edges {
          node {
            lang
            uid
            id
            data {
              title {
                text
              }
            }
          }
        }
      }
    }
  `)

  const locale = lang.locale ? lang.locale : 'de-de'

  const links = [
    { node: { lang: lang.locale, uid: '', data: { title: { text: lang.i18n[locale].homepage } } } },
    ...data.links.edges.filter(edge => edge.node.lang === lang.locale),
  ].map(edge => <ListLink to={`/${edge.node.uid}`}>{edge.node.data.title.text}</ListLink>)

  return (
    <HeaderCont>
      <div className={`${menuStatus ? 'menu-open' : 'menu-closed'}`}>
        <header className="header-cont">
          <div className="logo-cont">
            <Link to="/">
              <img src={Logo} alt={'Hibiki Publishing logo'} />
            </Link>
          </div>
          <button className="btn" onClick={() => menuChange(!menuStatus)}>
            Menu
          </button>
          <nav className="nav-cont">
            <ul>{links}</ul>
          </nav>

          <LocaleSwitcher data-name="locale-switcher">
            <LocalizedLink forceLocale="de-de" to={localeSwitcherUrl}>
              DE
            </LocalizedLink>{' '}
            /{' '}
            <LocalizedLink forceLocale="en-us" to={localeSwitcherUrl}>
              EN
            </LocalizedLink>{' '}
            /{' '}
            <LocalizedLink forceLocale="ja-jp" to={localeSwitcherUrl}>
              日本
            </LocalizedLink>
          </LocaleSwitcher>
        </header>
      </div>
    </HeaderCont>
  )
}
