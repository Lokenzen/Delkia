
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
    'index.csr.html': {size: 23719, hash: 'a965537cfda0709eb8ec244f8c913a810e65189d418061b635480aeff8f40b1b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17293, hash: 'e7fb3450d3e15034aa1b348c40adb2281c3f2f80fc33a9404e20f729ab4c1dab', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 82165, hash: '70624d18b90fa7fc06147e427be3514900a3a1c32ec6e46bc0c895bba5a134bd', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-52WF6A3K.css': {size: 6979, hash: 'ob/HeOe/41A', text: () => import('./assets-chunks/styles-52WF6A3K_css.mjs').then(m => m.default)}
  },
};
