
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
    'index.csr.html': {size: 23714, hash: '588fe17fba5cee33d70c23d3e9902cf541bc4d7f4a2323aa9eaf6ed9b22f9720', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17288, hash: 'f33f4ed75fd03e2c1e09261b22ecfa64979917f07a06aeaef90f5fc3264ab9ed', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 109341, hash: '5f739d73ecff12a94ad06d95e28bfab95e60b7d778058c7c2f7e2ace07e69cfe', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-VWZLFGDV.css': {size: 7282, hash: 'SOkQcx9qwhQ', text: () => import('./assets-chunks/styles-VWZLFGDV_css.mjs').then(m => m.default)}
  },
};
