module.exports = function (remoteMongoURL, username, password) {
    const mongoose = require('mongoose');
    const databaseName = 'whiteboard';
    let connectionString = 'mongodb://localhost:27017/';
    connectionString += databaseName;
    if(remoteMongoURL){
        connectionString = 'mongodb://' + username + ':' + password + remoteMongoURL;
    }
    mongoose.connect(connectionString, {useNewUrlParser: true});
};
