const express = require('express');
const { addEmployee, getEmployees, deleteEmployee } = require('../controllers/employeeController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.route('/').post(addEmployee).get(getEmployees);
router.route('/:id').delete(authMiddleware, deleteEmployee);

module.exports = router;
