const mongoose = require('mongoose');
const uri = "mongodb://nhensophamony_db_user:XQP5D3NDlGHfHaF5@ac-as9bhjd-shard-00-00.1s6tq4a.mongodb.net:27017,ac-as9bhjd-shard-00-01.1s6tq4a.mongodb.net:27017,ac-as9bhjd-shard-00-02.1s6tq4a.mongodb.net:27017/cloudnative?ssl=true&replicaSet=atlas-13j65l-shard-0&authSource=admin&appName=Cluster0";

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } 
  finally {
    // Ensures that the client will close when you finish/error
    // await mongoose.disconnect();
  }
}
run().catch(console.dir);

// STEP-3 : EXPORT MODULE mongoose because we need it in other JS file
module.exports = mongoose;
