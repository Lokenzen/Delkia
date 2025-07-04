
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
    'index.csr.html': {size: 23714, hash: 'c6063bce07d4d23a2123b43dcebe78c2cacbdfd1a7662bf82d1e350fada4aee8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17288, hash: '73a6e33b25c232f2827652e5b842da23f35dd8c690e3334dc278a186bda99aea', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 108670, hash: '0089a5bdcf3f8df461aa9b7815e136c2b8d94ddd6a257ec95eada5903f4e4de2', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-ILL2IM5G.css': {size: 7353, hash: 'MknLD7vcyqg', text: () => import('./assets-chunks/styles-ILL2IM5G_css.mjs').then(m => m.default)}
  },
};
