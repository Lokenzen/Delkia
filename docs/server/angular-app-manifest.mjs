
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
    'index.csr.html': {size: 23714, hash: '0365536b76ea4a796a188a7d6418cf2db9c63d01151e8d402d7e68c7ffcc515a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17288, hash: '864fffa791a4f911c3fd2ab39949067291f7bd157902169d322516b37ccd0b0a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 109339, hash: 'b4422b56ee2227ed8b0e1b3ac551c8d3b2d436ffb9bb9cf72907e65ba26eb6eb', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-VWZLFGDV.css': {size: 7282, hash: 'SOkQcx9qwhQ', text: () => import('./assets-chunks/styles-VWZLFGDV_css.mjs').then(m => m.default)}
  },
};
