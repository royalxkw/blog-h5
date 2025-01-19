import React from 'react'

export default function RootLayOut({ children }) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>念头不通达的小站</title>
      </head>
      <body>{children}</body>
    </html>
  )
}
