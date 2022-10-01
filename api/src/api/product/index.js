import Router from 'koa-router';

import {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from './product.ctrl';

const router = new Router();

router.post('/register', createProduct);
router.get('/', getProducts);
router.get('/:id', getProduct);
router.patch('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;
