import { Urbanist } from 'next/font/google'

//import ModalProvider from '@/providers/modal-provider'
//import ToastProvider from '@/providers/toast-provider'

import './globals.css'
import Navbar from '@/components/navbar'
//import Footer from '@/components/footer'

const font = Urbanist({ subsets: ['latin'] })

export const metadata = {
  title: 'Admin Panel',
  description: 'Admin Panel - The place for all project control.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        {/*<ToastProvider />
        <ModalProvider />
  */}   <div className='relative'>
          <Navbar />
        {children}
        {/*<Footer />*/}
        </div>
      </body>
    </html>
  )
}