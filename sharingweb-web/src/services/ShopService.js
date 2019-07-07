import http from './BaseService';

const listShops = () => http.get('/shops')
  .then(res => res.data)

const shopDetail = urlName => http.get(`/shops/${urlName}`)
  .then(res => res.data)

const listProducts = urlName => http.get(`/shops/${urlName}/products`)
  .then(res => res.data)

const productDetail = (urlName, id) => http.get(`/shops/${urlName}/products/${id}`)
  .then(res => res.data)

const addProduct = product => http.post(`/shops/${product.shopName}/products`, product) 
  .then(res => res.data)

const listOrders = urlName => http.get(`/shops/${urlName}/orders`)
  .then(res => res.data)

const orderDetail = (urlName, id) => http.get(`/shops/${urlName}/orders/${id}`)
  .then(res => res.data)

const purchase = order => http.post(`shops/${order.shopName}/orders`, order) 
  .then(res => res.data)

const editShop = shop => http.put(`/shops/${shop.urlName}`, shop)
  .then(res => res.data)

export default {listShops,
  shopDetail,
  listProducts,
  productDetail,
  addProduct,
  listOrders,
  orderDetail,
  purchase,
  editShop
}