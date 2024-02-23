export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

import {ReactNode} from 'react'

export default function RootLayout({ children }:{children:ReactNode}) {
 return <div className="p-2 w-screen h-screen bg-transparent">
           {children}
        </div>
  
}
