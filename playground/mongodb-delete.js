// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

  // delete many
    // db.collection('Todos').deleteMany({text: "Eat lunch"}).then((result) => {
    //     console.log(result);
    // });

   // deleteOne
    // db.collection('Todos').deleteOne({ text: "Eat lunch" }).then((result) => {
    //     console.log(result);
    // }); 

    // find One and Delete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    //delete many
    // db.collection('Users').deleteMany({ name: "Akash" }).then((result) => {
    //     console.log(result);
    // });

    // find One and Delete
    db.collection('Users').findOneAndDelete({ _id: new ObjectID("5aa3efda0cada247551a0eb3")}).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    });

    // db.close();
});