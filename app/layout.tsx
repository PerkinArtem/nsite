import { Footer } from '../components/Footer/Footer'
import { Header } from '../components/Header/Header'
import '../styles/global.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body className='flex flex-col text-white bg-neutral-700'>
          <Header />
          <main className='flex-1 py-10'>
            {children}
          </main>
          <Footer />
      </body>
    </html>
  )
}
