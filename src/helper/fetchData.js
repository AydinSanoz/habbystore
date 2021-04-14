import axios from 'axios';

const baseUrl = 'https://habby.store';
const basePath = '/wp-json/wc/v3';
const consumer_key = 'ck_3cd96adeef6d7c7cea0945b987bc466eb607e5e2';
const consumer_secret = 'cs_0aeaf5f789314fe3e8f9682c9af1d363d440d0bf';
// const per_page = 90;
// const parent = 0;

// const baseUrl = 'https://www.tekislastik.com/';
// const consumer_key = 'ck_3cd96adeef6d7c7cea0945b987bc466eb607e5e2';
// const consumer_secret = 'cs_0aeaf5f789314fe3e8f9682c9af1d363d440d0bf';

export async function fetch(route, params) {
  try {
    const data = await axios.get(baseUrl + basePath + route, {
      params: {
        consumer_key: consumer_key,
        consumer_secret: consumer_secret,
        order: 'asc',
        per_page: 99,
        ...params,
      },
    });
    return data;
  } catch ({response}) {
    console.log('err', response);
    return response;
  }
}
/* 
100 Informational codes indicating that the request initiated by the browser is continuing.
200 Success codes returned when browser request was received, understood, and processed by the server.
300s: Redirection codes returned when a new resource has been substituted for the requested resource.
400s: Client error codes
401 unAuth err
404 noRoute
500s: Server error codes

*/
