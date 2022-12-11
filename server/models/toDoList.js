const mongoose = require('.');

//schema for model
const listSchema = new mongoose.Schema({
  dueDate: String,
  description: String
});

//compile schema into model
const toDoList = mongoose.model('toDoList', listSchema);

// //Reset contents on server upload
// toDoList.remove({}, function(err) {
//   if (err) {
//     // handle error
//   } else {
//     // all documents in MyModel have been deleted
//   }
// });

async function postToDo (toDo) {
  try {
    console.log('posting', toDo);
    const toDoItem = new toDoList(toDo)
    await toDoItem.save();
    // return toDoItem;
  } catch (err) {
    return err;
  }
}

// postToDo({dueDate: '17/08/2000', description: 'test'});

async function getAll () {
  try {
    const toDoItems = await toDoList.find();
    return toDoItems; 
  } catch (err) {
    return err;
  }
}

async function deleteItem (id) {
  console.log(id);
  toDoList.findByIdAndDelete(id, (err) => {
    if (err) {
      // If there was an error, return a error response
      console.log(err)
    } else {
      // If the item was deleted successfully, return a success response
      // res.send({ success: true });
    }
  });
}

module.exports = { postToDo, getAll, deleteItem };