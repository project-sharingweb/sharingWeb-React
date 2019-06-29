import http from './BaseService';

const listShops = () => http.get('/shops')
  .then(res => res.data)

const shopDetail = name => http.get(`/shops/${name}`)
  .then(res => res.data)

const listProducts = name => http.get(`/shops/${name}/products`)
  .then(res => res.data)

const productDetail = (name, id) => http.get(`/shops/${name}/products/${id}`)
  .then(res => res.data)

const addProduct = product => http.post('/addProduct', product) 
  .then(res => res.data)

const listOrders = name => http.get(`/shops/${name}/orders`)
  .then(res => res.data)

const orderDetail = (name, id) => http.get(`/shops/${name}/orders/${id}`)
  .then(res => res.data)

const purchase = product => http.post('shops/purchase', product) 
  .then(res => res.data)

export default {listShops,
  shopDetail,
  listProducts,
  productDetail,
  addProduct,
  listOrders,
  orderDetail,
  purchase
}