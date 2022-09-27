import Router from 'koa-router';
import * as cartCtrl from './cartctrl';

const router = new Router();

router.patch('/:id', cartCtrl.createCart);
router.get('/:id', cartCtrl.userAllCart);
router.put('/:id', cartCtrl.updateCart);
router.post('/:id', cartCtrl.deleteCart);
router.post('/check/:id', cartCtrl.checkCart);

export default router;
