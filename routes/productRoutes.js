const router = require('express').Router();
const ctrl = require('../controllers/productController');
const { protect } = require('../middleware/authMiddleware');
const admin = require('../middleware/roleMiddleware');

router.get('/categories', ctrl.getCategories);
router.get('/', ctrl.getProducts);
router.get('/:id', ctrl.getProductById);

router.post('/', protect, admin, ctrl.createProduct);
router.put('/:id', protect, admin, ctrl.updateProduct);
router.delete('/:id', protect, admin, ctrl.deleteProduct);

module.exports = router;