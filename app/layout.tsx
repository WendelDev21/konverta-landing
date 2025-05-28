import type { Metadata } from 'next'
import './globals.css'

export const metadata = {
  title: "Konverta",
  description: "Um CRM simples e eficiente para pequenas empresas",
  generator: "v0.dev",
  icons: {
    icon: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
