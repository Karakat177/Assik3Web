const router = require('express').Router();
const ctrl = require('../controllers/orderController');
const { protect } = require('../middleware/authMiddleware');
const admin = require('../middleware/roleMiddleware');

router.post('/', protect, ctrl.createOrder);
router.get('/user/my-orders', protect, ctrl.getUserOrders);

router.get('/', protect, admin, ctrl.getOrders);
router.put('/:id', protect, admin, ctrl.updateOrderStatus);
router.delete('/:id', protect, admin, ctrl.deleteOrder);

module.exports = router;