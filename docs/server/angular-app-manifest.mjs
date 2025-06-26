
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
    'index.csr.html': {size: 23714, hash: '3c56bb094ecd709a4180f9b8bf9cafcacb6d511a04061546e87479fb1859d3da', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17288, hash: 'c41297f6f2beed045821f4f03ac37b4dae4e57f60dbe4054c781c77fc7944481', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 109340, hash: 'a1e4bcd7c3e79b34d0a28a26dbdf034b72097626f812bc8871de836a6ee12105', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-VWZLFGDV.css': {size: 7282, hash: 'SOkQcx9qwhQ', text: () => import('./assets-chunks/styles-VWZLFGDV_css.mjs').then(m => m.default)}
  },
};
