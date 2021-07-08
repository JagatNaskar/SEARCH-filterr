const express=require('express');
const mongoose=require('mongoose');
const app=express();
const ejs=require('ejs');

app.set('view engine', 'ejs');
mongoose.connect('mongodb+srv://jmejagat:mongo7685@secondsem.fqfvw.mongodb.net/SecondSem?retryWrites=true&w=majority');

const dbSchema={
    id: Number,
    name: String,
    year: Number,
    color: String,
    age: Number
}

const Datta = mongoose.model('data', dbSchema);
app.get('/', (req, res)=>{
    DataList.find({}, function(data)
    {
        res.render('Service.js', {
            dataList: data
        })
    })
})
app.listen(4000, function(){
    console.log('server is running');
})




// var url='mongodb+srv://jmejagat:mongo7685@secondsem.fqfvw.mongodb.net/SecondSem?retryWrites=true&w=majority';
// app.get('/item_info', (req, res) => {
//     var data;
//     MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
//       if (err) throw err;
//       var dbo = db.db("ItemList");
//       dbo.collection("ItemInfo").find().toArray(function(err, result) {
//         if (err) throw err;
//         res.send({express: result})
//         db.close();
//       });
//     });
//   });