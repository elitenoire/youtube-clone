import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'
import config from './jsconfig.json'

const alias = Object.entries(config.compilerOptions.paths).reduce((acc, [key, [value]]) => {
  const aliasKey = key.substring(0, key.length - 2)
  const path = value.substring(0, value.length - 2)
  return {
    ...acc,
    [aliasKey]: resolve(__dirname, path),
  }
}, {})

// https://vitejs.dev/config/
export const viteConfig = defineConfig({
  base: '/youtube-clone/',
  resolve: {
    alias,
  },
  plugins: [react(), svgr()],
})

export default viteConfig
