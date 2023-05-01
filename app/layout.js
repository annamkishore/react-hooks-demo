// feature #3(next): title
export const metadata = {title: 'Typing Game'}
import './global.css'

export default function RootLayout({children}) {
  return (
    <html lang="en">
    <head>
      <link rel="shortcut icon" href="/favicon.ico" />
    </head>
    <body>
    {children}
    </body>
    </html>
  )
}
