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
        <meta name="viewport" content="width=device-width, initial-scale=0.8, maximum-scale=1" />

      </Head>
    <main>
      {children}
      </main>
    </Fragment>
  )
}
