/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      comfortaa: ['Comfortaa'],
      signikaNegative: ['Signika Negative'],
      dmMono: ['DM Mono'],
      martianMono: ['Martian Mono'],
      nunito: ['Nunito'],
    },
    screens: {
      xss:'320px',
      xsm: '420px',
      xm: '480px',
      xs: '550px',
      sm: '600px',
      cz: '664px',
      md: '768px',
      cs: '953px',
      lg: '1024px',
      xl: '1200px'
    },
    extend: {
      height: {
        'altura': 'calc(100vh - 72px)'
      },
      margin: {
        'centrar-contenido': 'auto'
      },
      colors: {
        'principal': '#121f3d',
        'secundary': 'rgb(12 24 50)',
        'modal': 'rgba(0,0,0,.24)',
        'background': '#1b1f44',
        'background-flashcards': '#0f253b',
        'blue-slate': 'bg-slate-800',
        'graduado-blue-1': 'rgb(5,100,245)',
        'graduado-blue-2': 'rgba(40,62,143,1)',
        'graduado-blue-3': 'rgba(12,49,131,1)',
        'cardTransparent': '#ffffff40',
        'gg-1': '#1bb920',
        'gg-2': '#3e9438',
        'gg-3': '#0f7e1b',
        'gy-1': '#ffb418',
        'gy-2': '#ffed52',
        'gy-3': '#fbff72',
        'gb-1':'#2c31f9',
        'gb-2':'#4953f6',
        'gb-3':'#5e68ff',
        'go-1':'#f9b72c',
        'go-2':'#ffc76f',
        'go-3':'#ffd38e',
        'ggw-1':'#47d07d',
        'ggw-2':'#46e996',
        'ggw-3':'#68fea1',
        'gr-1':'#f64141',
        'gr-2':'#ff5858',
        'gr-3':'#ff7373',

      },
      gridTemplateRows: {
        // Complex site-specific row configuration
        'layoutGlobal': 'auto 1fr auto',
        '8': 'repeat(8, minmax(0, 1fr))',
        'gridSideBar': 'auto calc(100vh - 194px) auto',
        'flashcardWelcome': 'auto auto',
        // Complex site-specific row configuration
        'layout': '200px minmax(900px, 1fr) 100px',
      },
      gridTemplateColumns: {
        // 'layoutDecks': '75% 25%',
        'layoutDecks': '80% minmax(40px, 50px)',
        // 'layoutDecks': '90% 10%',
        'gridCardProduct': '40% 60%',
        'gridSidebar': '18% 82%',
        'gridSidebarMd': '20% auto',
        'gridPageSlider': '400px 400px',
        'gridCardStat': '70% 30%',
      }
    },
    variants: {
      extend: {
        // ...
        display: ['hover', 'focus', 'group-hover'],
      }
    }

  },
  plugins: [],
}

