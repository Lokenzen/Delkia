
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23714, hash: 'da464310955f94c94f8fd386efac45739f86a5204540b4a1d482828dbd291919', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17288, hash: '62c49e50ca14309fe36c987bd971c250372d818d296ecb8c8704438c56f4cb9b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 82477, hash: 'ce229ded557d09bc428f61d1b43dff2bbadf882c16cb8510c80c0eabf1804e46', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-52WF6A3K.css': {size: 6979, hash: 'ob/HeOe/41A', text: () => import('./assets-chunks/styles-52WF6A3K_css.mjs').then(m => m.default)}
  },
};
