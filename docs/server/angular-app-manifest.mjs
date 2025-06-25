
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
    'index.csr.html': {size: 23714, hash: '97ddd1c4548e95e08deeb169ca539aa8248a1fac46bf91fb86e1b1415e82f813', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17288, hash: '1455f2f4d17ed442ef60f02b903b131c213fbdf834013d8ccd3c213a518a3ebf', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 109253, hash: '238014f7887360c74db8e8210d32e09cf91aa48bee3b048d40e613e67ac2cff6', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-VWZLFGDV.css': {size: 7282, hash: 'SOkQcx9qwhQ', text: () => import('./assets-chunks/styles-VWZLFGDV_css.mjs').then(m => m.default)}
  },
};
