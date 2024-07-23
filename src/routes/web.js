const express = require('express');
const { getHomepage, getIndex } = require('../controllers/HomeController');
const router = express.Router();
router.get('/', getHomepage);
router.get('/abc', getIndex);




module.exports = router; //export default 