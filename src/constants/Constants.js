const prod = {
  siteName: 'https://habby.store',
  apiBaseurl: 'wp-json/wc',
  consumer_key: 'ck_3cd96adeef6d7c7cea0945b987bc466eb607e5e2',
  consumer_secret: 'cs_0aeaf5f789314fe3e8f9682c9af1d363d440d0bf',
  categories: '/products/categories',
  products: '/products',
  attributes: '/products/attributes',
};
const dev = {
  siteName: 'https://localhost:8081',
  apiBaseurl: 'wp-json/wc',
  consumer_key: 'ck_3cd96adeef6d7c7cea0945b987bc466eb607e5e2',
  consumer_secret: 'cs_0aeaf5f789314fe3e8f9682c9af1d363d440d0bf',
  categories: '/products/categories',
  products: '/products',
  attributes: '/products/attributes',
};

// export const config = process.env.NODE_ENV === ‘dev’ ? dev : prod;
