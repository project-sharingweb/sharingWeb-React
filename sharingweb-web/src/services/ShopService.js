import http from './BaseService';

http.interceptors.response.use(response => response.data)

const listShops = () => http.get('/shops')

const shopDetail = urlName => http.get(`/shops/${urlName}`)

const listProducts = urlName => http.get(`/shops/${urlName}/products`)

const productDetail = (urlName, id) => http.get(`/shops/${urlName}/products/${id}`)

const addProduct = product => {
  const data = new FormData();
  Object.keys(product).forEach(prop => data.append(prop, product[prop]))
  
  return  http.post(`/shops/${product.shopName}/products`, data)
} 

const listOrders = urlName => http.get(`/shops/${urlName}/orders`)

const orderDetail = (urlName, id) => http.get(`/shops/${urlName}/orders/${id}`)

const deleteProduct = product => http.post(`/shops/${product.shopName}/products/delete`, product)

const purchase = order => http.post(`shops/${order.shopName}/orders`, order) 

const editShop = (shop, img) => {
  if (img === ""){return http.put(`/shops/${shop.urlName}`, shop)} 
  const data = new FormData();
  Object.keys(shop).forEach(prop => data.append(prop, shop[prop]))
  data.append("background", img)
  return http.put(`/shops/${shop.urlName}`, data)
}

const editOrder = (id, shop) => http.post(`/shops/${shop}/orders/${id}`)

export default {listShops,
  shopDetail,
  listProducts,
  productDetail,
  addProduct,
  listOrders,
  orderDetail,
  purchase,
  editShop,
  deleteProduct,
  editOrder
}