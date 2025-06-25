
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
    'index.csr.html': {size: 23714, hash: 'ecfb4d7be154a75f898ceae7ae4bc1d73eea469f7dc27e5a0821f4856e7cc8ab', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17288, hash: 'b222ec12a8d621a8d0be5ddc7763dd663a470897eddeccb59bc4799987def532', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 85154, hash: 'b37a66bf4d421f9a02aaa3ed807d6f4e2a669b9961cd0f4235b306cbc5b640c7', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-J4KOVSEO.css': {size: 7030, hash: 'EsluFmCPF+g', text: () => import('./assets-chunks/styles-J4KOVSEO_css.mjs').then(m => m.default)}
  },
};
