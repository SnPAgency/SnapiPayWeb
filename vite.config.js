import { resolve } from 'path'
// import dotenv from 'dotenv'

// Load environment variables
// dotenv.config({ path: '.env' })

export default {
  base: process.env.RENDER_PATH || '/SnapiPayWeb/', // Add this - replace with your actual GitHub repo name
  root: resolve(__dirname, 'src'),
  build: {
    outDir: '../dist'
  },
  server: {
    port: 8080
  },
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: [
          'import',
          'mixed-decls',
          'color-functions',
          'global-builtin',
        ],
      },
    },
  },
}