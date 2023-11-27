import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Branch',
  description: "For independents who aren't willing to answer many questions"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body
        className={('relative h-full font-sans antialiased', inter.className)}>
        <main className="relative flex flex-col min-h-screen">
          <div className="flex-grow flex-1">{children}</div>
        </main>
      </body>
    </html>
  )
}
