const router = require('express').Router();
const ctrl = require('../controllers/productController');
const auth = require('../middleware/authMiddleware');
const admin = require('../middleware/roleMiddleware');

router.get('/', ctrl.getProducts);
router.get('/:id', ctrl.getProductById);

router.post('/', auth, admin, ctrl.createProduct);
router.put('/:id', auth, admin, ctrl.updateProduct);
router.delete('/:id', auth, admin, ctrl.deleteProduct);

module.exports = router;
