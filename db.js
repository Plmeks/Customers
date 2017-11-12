var mongoose = require('mongoose');
mongoose.connect(
  'mongodb://2a605a0e0f5658fb6084673074b09ac5:50198581994meks@4a.mongo.evennode.com:27017,4b.mongo.evennode.com:27017/2a605a0e0f5658fb6084673074b09ac5?replicaSet=eu-4',
  { useMongoClient: true }
);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we connected!');
});

module.exports = mongoose;