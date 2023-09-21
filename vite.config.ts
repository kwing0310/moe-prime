import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import { presetUno, presetWebFonts, presetTypography, presetAttributify, presetIcons } from 'unocss'
import ViteInspector from 'vite-plugin-inspect'

export default defineConfig({
  root: './src',
  build: {
    outDir: './dist'
  },
  plugins: [
    UnoCSS({ 
      mode: 'shadow-dom',
      shortcuts: {
        'button': 'bg-primary text-fg box-border font-bold flex justify-center items-center cursor-pointer',
        'overlay': 'position-absolute object-left-top w-full max-w-420px h-full m-0 font-bold text-gray-100 text-8xl text-center', 
        'numbers-row': 'flex justify-between'
      },
      theme: {
        colors: {
          bg: 'rgba(248, 217, 222, 0.60)',
          light: '#FCF5F7',
          fg: '#5B4B4E',
          primary: '#EEC3CC',
          green: '#6EAA39',
          red: '#C95F5F'
        }
      },
      presets: [
        presetUno(),
        presetTypography(),
        presetAttributify(),
        presetIcons()
      ]
    }),
    ViteInspector()
  ]
})
