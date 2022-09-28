import Router from 'koa-router';
import posts from './posts';
import auth from './auth';
import product from './product';
import cart from './cart';
import payment from './payment';

const api = new Router();

api.use('/auth', auth.routes());
api.use('/posts', posts.routes());
api.use('/product', product.routes());
api.use('/cart', cart.routes());
// api.use('/payments', payment.routes());

// 라우터를 내보냅니다.
export default api;
