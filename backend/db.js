

var mongoURL = 'mongodb+srv://yen:u7pR6ftcm3WtqCyS@cluster0.qed7j.mongodb.net/QLKTX'

const colors = require('colors');
const mongoose = require('mongoose')
mongoose.connect(mongoURL , { useNewUrlParser : true, useUnifiedTopology : true})
.then((res)=>console.log('> Connected...'.bgCyan))
.catch(err=>console.log(`> Error while connecting to mongoDB : ${err.message}`.underline.red ))
module.exports = mongoose