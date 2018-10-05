// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MangoDB server');
    }

    console.log('Connected to MongoDB server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: ObjectID('5bb71af2b28e7f25cef85dd2')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((resp) => {
    //     console.log(resp);
    // });


    db.collection('Users').findOneAndUpdate({
        _id: ObjectID('5bb5e906df2fb9220acb6b3c')
    }, {
        $set: {
            name: 'Cata2'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((resp) => {
        console.log(resp);
    });

    // db.close();
});