const router = require('express').Router();
const ctrl = require('../controllers/orderController');
const auth = require('../middleware/authMiddleware');
const admin = require('../middleware/roleMiddleware');

// User routes
router.post('/', auth, ctrl.createOrder);
router.get('/user/my-orders', auth, ctrl.getUserOrders);

// Admin routes
router.get('/', auth, admin, ctrl.getOrders);
router.put('/:id', auth, admin, ctrl.updateOrderStatus);
router.delete('/:id', auth, admin, ctrl.deleteOrder);

module.exports = router;
