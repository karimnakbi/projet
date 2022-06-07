const express = require('express');
const { register, login, getPersonData } = require('../controllers/personControllers');
const { authMiddleware } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/', authMiddleware, getPersonData);
module.exports = router;