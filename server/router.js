const express = require('express');
const router = express.Router();
const { addToList, getList, deleteItem } = require('./controllers/toDoList.js')

// router.post('/add', (req,res) => {
//   // console.log(req);
//   addToList(req, res);
// });
router.post('/add', addToList);
router.get('/list', getList);
router.delete('/item/:id', deleteItem)

module.exports = router;