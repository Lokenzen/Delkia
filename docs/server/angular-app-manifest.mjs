
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/delkia',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/delkia"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23719, hash: '59433a0c5a90ed8420b6baefec392f5c37f9e57add2b46f1371c6462ba674392', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17293, hash: 'b90b250b2ea25e57dcd839f517fc2fa4319bf89332bc79948badb1346ebc6e7e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 82482, hash: 'c1e5f1b6425c99b59ef6996aea3dfc2371b644e32f1af6ca94fa31abc05654bc', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-52WF6A3K.css': {size: 6979, hash: 'ob/HeOe/41A', text: () => import('./assets-chunks/styles-52WF6A3K_css.mjs').then(m => m.default)}
  },
};
