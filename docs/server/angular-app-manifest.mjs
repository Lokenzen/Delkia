
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Delkia',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Delkia"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23719, hash: '47d8bebb66f6da01fb7efa07432c16f3a0964183ecf61b55e32de736887f08a8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17293, hash: '6d3d97be185e8593d2fd38ffb4f3bfcee10a35d0a97ea24945ea4ead10c0a190', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 82482, hash: 'b9525f59f37deb5f733b23e7259a0135f7092ce93b3346660275253a5a429d00', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-52WF6A3K.css': {size: 6979, hash: 'ob/HeOe/41A', text: () => import('./assets-chunks/styles-52WF6A3K_css.mjs').then(m => m.default)}
  },
};
