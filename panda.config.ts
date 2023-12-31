import { defineConfig } from "@pandacss/dev"

export default defineConfig({
  // Whether to use css reset
  preflight: true,
  
  // Where to look for your css declarations
  include: ["./components/**/*.{js,jsx,ts,tsx,vue}", "./pages/**/*.{js,jsx,ts,tsx,vue}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    // 👇🏻 Define your tokens here
    tokens: {
      colors: {
        primary: {value: '#1E293B'},
        secondary: {value: '#3b82f6'},
        white: {value: '#fff'},
        tertiary: {value: '#9d9d9d'}
      },
      fonts: {},
      sizes: {},
    },
    breakpoints: {
      xs: '0',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    }
  },

  globalCss: {
    "html, body": {
      "margin": 0,
      "padding": 0,
    },
    '*': {
      boxSizing:  'border-box',
    },
    "img": {
      width: '100%'
    }
  },

  // The output directory for your css system
  outdir: "styled-system",
})