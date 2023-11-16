import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'
import Header from "@/component/header/Header";
import TheFooter from "@/component/footer/TheFooter";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MyApp',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <div className="wrapper">
              <Header/>
              <main className='main'>
                  <div className='main__container'>
                      {children}
                  </div>
              </main>
              <TheFooter/>
          </div>
      </body>
    </html>
  )
}

