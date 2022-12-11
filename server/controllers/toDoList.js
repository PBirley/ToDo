
//import database
const model = require('../models/toDoList.js')
// const bodyParser = require('body-parser');

//handle post request
const addToList = async (req, res) => {
  try {
    console.log(req.body);
    model.postToDo(req.body);
    res.sendStatus(200);
  } catch (err) {
    console.log(err)
  }
}

const getList = async (req, res) => {
  try {
    const list = await model.getAll();
    console.log(list);
    res.send(list);
    res.status = 200;
  } catch (err) {
    console.log(err);
  }
}

const deleteItem = async (req, res) => {
  try {
    const id = req.params.id
    console.log(id);
    await model.deleteItem(id)
  } catch (err) {
    console.log(err)
  }
}

module.exports = { addToList, getList, deleteItem };