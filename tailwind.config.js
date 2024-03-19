import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
const config = {
    content: [
        './pages/**/*.{js,jsx}',
        './components/**/*.{js,jsx}',
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {

            }
        },
    },
    darkMode: "class",
    plugins: [nextui({
        themes: {
            light: {
                layout: {
                    radius: {
                        small: '4px',
                        medium: '6px',
                        large: '12px',
                    },
                    hoverOpacity: 0.8
                },
                colors: {
                    background: '#f5f5f5',
                    header: '#104f6b',
                    navigation: '#0b3c52',
                    footer: '#f5f5f5',
                    container: '#fff',
                    border: '#e3e3e3',
                    primary: {
                        DEFAULT: '#104f6b',
                        foreground: '#ffffff'
                    },
                    hover: '#f1f1f1'
                }
            },
            dark: {
                layout: {
                    hoverOpacity: 0.8
                },
                colors: {
                    background: '#1c1c1c',
                    header: '#252525',
                    navigation: '#2b2b2b',
                    footer: '#1c1c1c',
                    container: '#252525',
                    border: '#313131',
                    content1: '#2b2b2b',
                    primary: {
                        DEFAULT: '#2f2f2f',
                    },
                    default: {
                        100: '#373737',
                        200: '#353535'
                    },
                    hover: '#212121'
                }
            },
        }
    })]
}

export default config;