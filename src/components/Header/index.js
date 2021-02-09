import React, { useState } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import '../../scss/main.scss'
import Logo from '../../images/hibiki-logo4.svg'

const LocaleSwitcher = styled.div`
  padding: 1rem;
  z-index: 4;
`

export default () => {
  const [menuStatus, menuChange] = useState(false)

  const ListLink = props => (
    <li className="nav-link">
      <Link to={props.to}>{props.children}</Link>
    </li>
  )

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
            <ul>
              <ListLink to="/">Home</ListLink>
              <ListLink to="/about/">Submissions</ListLink>
              <ListLink to="/journal/">FAQ</ListLink>
              <ListLink to="/contact/">Catalog</ListLink>
              <ListLink to="/contact/">About</ListLink>
            </ul>
          </nav>
          <LocaleSwitcher data-name="locale-switcher">
            <Link hrefLang="de-de" to="/">
              DE
            </Link>{' '}
            /{' '}
            <Link hrefLang="en-us" to="/en">
              EN
            </Link>{' '}
            /{' '}
            <Link hrefLang="ja-jp" to="/jp">
              日本
            </Link>
          </LocaleSwitcher>
        </header>
      </div>
    </HeaderCont>
  )
}
