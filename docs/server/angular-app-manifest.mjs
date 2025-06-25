
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/delkia"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23721, hash: 'fbaf4e29c2a3cc683be7586a676cfe615748c0709ddde6baf1cc472fcb6e81d0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17295, hash: '18657d335edda7780bb2680028f535a27c9eb8993281751e44c6346b38284960', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'delkia/index.html': {size: 82484, hash: '56d9844dac6b9dec836fc7d0b38965a853e6a2a8b2b375dc0ab5d359479401c7', text: () => import('./assets-chunks/delkia_index_html.mjs').then(m => m.default)},
    'styles-52WF6A3K.css': {size: 6979, hash: 'ob/HeOe/41A', text: () => import('./assets-chunks/styles-52WF6A3K_css.mjs').then(m => m.default)}
  },
};
