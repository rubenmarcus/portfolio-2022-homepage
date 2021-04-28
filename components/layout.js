import Link from 'next/link'
import Head from 'next/head'
import {Fragment } from 'react'

export default function Layout({
  children,
  title = 'Ruben Marcus - Software Engineer',
}) {
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
       <img src="./medium.jpg" />
        <h1>rubenmarcus.dev</h1>
      </header>
    <main>
      {children}
      </main>
      <footer>
      <a href="https://github.com/rubenmarcus">github  </a>
      <a href="https://linkedin.com/in/rubenmarcus">  linkedin </a>
      <a href="https://stackoverflow.com/users/5905497/ruben-marcus"> stackoverflow </a>
      <a href="https://wiki.developer.mozilla.org/pt-BR/profiles/rubenmarcus">  MDN </a>
      <a href="https://rubenmarcus.medium.com">  blog </a>
      
      </footer>
    </Fragment>
  )
}
