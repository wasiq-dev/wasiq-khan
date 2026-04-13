import "./globals.css"
import { Inter, Roboto_Mono } from "next/font/google"
import { Providers } from "./providers"

const inter = Inter({ subsets: ["latin"] })
const robotoMono = Roboto_Mono({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}