const {Router} = require('express');
const taskController = require('../controllers/taskController');
const router = Router();

router.get('/', taskController.getTasks)
router.post('/add', taskController.postAddTask);
// router.post('/editModal', taskController.getEditModal);
router.get('/edit/:taskId', taskController.getEditTask);
router.post('/edit', taskController.getEditTask);


module.exports = router;
