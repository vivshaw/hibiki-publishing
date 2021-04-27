import React from 'react'
import styled from '@emotion/styled'
import socials from '../../constants/social-icons'
import { LocaleContext } from '../Layout'
import LocalizedLink from '../LocalizedLink'

export default () => {
  const lang = React.useContext(LocaleContext)
  const i18n = lang.i18n[lang.locale]

  const ListLink = props => (
    <li className="nav-link">
      <LocalizedLink to={props.to}>{props.children}</LocalizedLink>
    </li>
  )

  const showYear = new Date().getFullYear()

  const FooterMenu = styled.ul`
    padding: 0;
    margin: 0;
    font-family: var(--sans);
    font-weight: 300;

    li {
      display: inline;
      /* padding-right: calc(var(--spacing) / 4); */

      &::after {
        content: '/';
        display: inline-block;
        padding-left: calc(var(--spacing) / 2);
      }

      a {
        font-weight: 300;
        text-decoration: none;
        color: var(--charcoal);
        transition: var(--transMed);
      }

      &:hover {
        a {
          color: var(--primaryColor);
        }
      }

      @media (min-width: 768px) {
        padding-left: calc(var(--spacing) / 2);
      }
    }
  `

  const FooterSocial = styled.ul`
    margin: 0;
    padding-top: var(--spacing);
    padding-left: 0;

    @media (min-width: 768px) {
      padding-top: 0;
    }

    li {
      font-size: var(--h4);
      list-style: none;
      display: inline;
      margin: 0 var(--spacing) 0 0;
      padding-left: 0;

      a {
        color: var(--charcoal);
        transition: var(--transMed);
      }

      &:hover {
        a {
          color: var(--primaryColor);
        }
      }

      @media (min-width: 768px) {
        margin: 0 0 0 var(--spacing);
      }

      @media (min-width: 1200px) {
        font-size: var(--h5);
      }
    }
  `

  const Footer = styled.footer`
    padding: calc(var(--spacing) * 3) calc(var(--spacing) * 2) var(--spacing) calc(var(--spacing) * 2);
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
    }
  `

  return (
    <Footer>
      <FooterMenu>
        <li>&copy; {showYear}</li>
        <li>Hibiki Publishing</li>
        <ListLink to="/impressum">{i18n.impressum}</ListLink>
      </FooterMenu>
      <FooterSocial>
        {socials.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.url}>
                <span className="sr-only">{item.name}</span>
                {item.icon}
              </a>
            </li>
          )
        })}
      </FooterSocial>
    </Footer>
  )
}
