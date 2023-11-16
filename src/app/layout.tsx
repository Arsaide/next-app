import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import TheNavbar from "@/component/navbar/TheNavbar";
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
      <TheNavbar/>
      {children}
      <TheFooter/>
      </body>
    </html>
  )
}

