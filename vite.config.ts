import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import legacy from '@vitejs/plugin-legacy';
import vueJsx from '@vitejs/plugin-vue-jsx';
import styleImport, { VantResolve } from 'vite-plugin-style-import';

export default defineConfig({
  // base: '',
  plugins: [
    vue(),
    vueJsx(),
    legacy({
      // 有效处理浏览器的兼容
      targets: ['defaults', 'ie >= 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
    }),
    styleImport({
      resolves: [VantResolve()],
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, '/src'),
    },
    extensions: ['*', '.js', '.json', '.vue', '.tsx'],
  },
  // optimizeDeps: {
  //   exclude: ['moment'],
  //   include: ['moment'], // 不在 node_modules 中的，链接的包不会被预构建。使用此选项可强制预构建链接的包。
  // },
  server: {
    open: true,
    host: '0.0.0.0',
    port: '4200',
    https: false,
    // proxy: {
    //   '/api': {
    //     target: ' https://chenxiaosong1996.top',
    //     secure: true,
    //     changeOrigin: true,
    //   },
    // },
  },
  build: {
    target: 'modules', // 设置最终构建的浏览器兼容目标。modules:支持原生 ES 模块的浏览器
    outDir: 'dist', // 指定输出路径
    assetsDir: 'assets', // 指定生成静态资源的存放路径
    minify: 'terser', // 混淆器， terser 构建后文件体积更小
    sourcemap: false,
    csscodesplit: true,
    commonjsOptions: {
      // 避免build后serve项目显示js报错“Cannot read property 'constant' of undefined” 怀疑lodash-es导致
      ignoreDynamicRequires: false,
    },
    brotliSize: true,
    chunkSizeWarningLimit: 600,
    // rollupOptions: {
    //   output: {
    //     entryFileNames: `assets/[name].js`,
    //     chunkFileNames: `assets/[name].js`,
    //     assetFileNames: `assets/[name].[ext]`,
    //     manualChunks: (id) => {
    //       // 切割第三方组件库
    //       if (id.includes('node_modules')) {
    //         return id.toString().split('node_modules/')[1].split('/')[0].toString();
    //       }
    //     },
    //   },
    // },
  },
});
