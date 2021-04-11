import axios from 'axios';

const baseUrl = 'https://habby.store/wp-json/wc/v3';
const consumer_key = 'ck_3cd96adeef6d7c7cea0945b987bc466eb607e5e2';
const consumer_secret = 'cs_0aeaf5f789314fe3e8f9682c9af1d363d440d0bf';
// const per_page = 90;
// const parent = 0;

export async function fetch(route, params) {
  try {
    const data = await axios.get(baseUrl + route, {
      params: {
        consumer_key: consumer_key,
        consumer_secret: consumer_secret,
        ...params,
      },
    });
    return data;
  } catch ({response}) {
    if (response.status === 400) {
      return {err: 'Aradığınız Ürün Bulunamadı'};
    } else {
      return {err: 'Network error'};
    }
  }
}
