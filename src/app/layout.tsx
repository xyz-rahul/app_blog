import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { TooltipProvider } from '@/components/plate-ui/tooltip'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <TooltipProvider
                    disableHoverableContent
                    delayDuration={500}
                    skipDelayDuration={0}
                >
                    <div className="relative flex min-h-screen flex-col">
                        <div className="flex-1">{children}</div>
                    </div>
                </TooltipProvider>
            </body>
        </html>
    )
}
