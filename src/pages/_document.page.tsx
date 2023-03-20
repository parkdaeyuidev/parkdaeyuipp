import { css } from '@emotion/react'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body css={css`
        overflow: hidden;
      `}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}