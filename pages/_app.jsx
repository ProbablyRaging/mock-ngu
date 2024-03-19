import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider } from '@/components/theme-provider'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    return (
        <NextUIProvider>
            <ThemeProvider
                attribute='class'
                defaultTheme='system'
                enableSystem
                disableTransitionOnChange
            >
                <Component {...pageProps} />
            </ThemeProvider>
        </NextUIProvider>
    );
}

export default MyApp;