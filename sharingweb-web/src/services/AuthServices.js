import http from './BaseService';

const register = shop => http.post('/auth/register', shop)

const editShop = shop => http.post('/auth/editshop')

const authenticate = credentials => http.post('/auth/login', credentials)

const logout = () => http.get('/auth/logout')


export default {register,
  editShop,
  authenticate,
  logout
}