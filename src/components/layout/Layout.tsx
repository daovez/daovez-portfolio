
import type { ReactNode } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

type LayoutProps = {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="site-layout">
      <Header />

      <main id="main-content" className="site-main">
        {children}
      </main>

      <Footer />
    </div>
  )
}
