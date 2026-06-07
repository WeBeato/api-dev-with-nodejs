const MyIrancellDB = require('./db/MyIrancellDB')

MyIrancellDB.connect(err => {
    if (err) {
        console.log('Error =>', err)
    } else{
        console.log('Connect to database successfully!');
    }
})