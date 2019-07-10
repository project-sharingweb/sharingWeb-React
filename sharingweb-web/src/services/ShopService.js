import http from './BaseService';

http.interceptors.response.use(response => response.data)

const listShops = () => http.get('/shops')

const shopDetail = urlName => http.get(`/shops/${urlName}`)

const listProducts = urlName => http.get(`/shops/${urlName}/products`)

const productDetail = (urlName, id) => http.get(`/shops/${urlName}/products/${id}`)

const addProduct = product => http.post(`/shops/${product.shopName}/products`, product) 

const listOrders = urlName => http.get(`/shops/${urlName}/orders`)

const orderDetail = (urlName, id) => http.get(`/shops/${urlName}/orders/${id}`)

const deleteProduct = product => http.post(`/shops/${product.shopName}/products/delete`, product)

const purchase = order => http.post(`shops/${order.shopName}/orders`, order) 

const editShop = shop => http.put(`/shops/${shop.urlName}`, shop)

export default {listShops,
  shopDetail,
  listProducts,
  productDetail,
  addProduct,
  listOrders,
  orderDetail,
  purchase,
  editShop,
  deleteProduct
}