import http from './BaseService';

const listShops = () => http.get('/shops')

const shopDetail = name => http.get(`/shops/${name}`)

const listProducts = name => http.get(`/shops/${name}/products`)

const productDetail = (name, id) => http.get(`/shops/${name}/products/${id}`)

const addProduct = product => http.post('/addProduct', product) 

const listOrders = name => http.get(`/shops/${name}/orders`)

const orderDetail = (name, id) => http.get(`/shops/${name}/orders/${id}`)

const purchase = product => http.post('shops/purchase', product) 

export default {listShops,
  shopDetail,
  listProducts,
  productDetail,
  addProduct,
  listOrders,
  orderDetail,
  purchase
}