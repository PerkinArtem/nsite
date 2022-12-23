import { Footer } from '../components/Footer/Footer'
import { Header } from '../components/Header/Header'
import Layout from '../components/Layout'
import '../styles/global.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}
