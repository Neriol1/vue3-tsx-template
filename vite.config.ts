import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import VueRouter from 'unplugin-vue-router/vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import vueJsx from '@vitejs/plugin-vue-jsx'


// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
      transformOn: true,
      mergeProps: true,
    }),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      symbolId: 'icon-[dir]-[name]',
      inject:'body-first',
      customDomId: '__svg__icons__dom__',
    }),
    VueRouter({
      routesFolder: 'src/views',
      extensions: ['vue','tsx'],
      exclude: ['**/components/*', 'src/views/**/layout/*'],
    }),
    vue(),
  ],
  server:{
    proxy:{
      '/api/v1':{
        target:'http://localhost:3000',
        rewrite(path) {
          return path.replace(/^\/api\/v1/, '')
        },
      }
    }
  }
})
