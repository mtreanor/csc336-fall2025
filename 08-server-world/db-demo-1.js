import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = "mongodb+srv://treanor_db_user:JsXQpehBs8FoN7aT@csc336-fall2025.mstvzz1.mongodb.net/?appName=csc336-fall2025";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    // console.log("Pinged your deployment. You successfully connected to MongoDB!");

    const db = await client.db("sample_mflix");
    const commentsCollection = db.collection("comments");

    // Add something
    // await commentsCollection.insertOne({
    //     name: "Mike"
    // });

    // Finding
    // let mike = await commentsCollection.findOne({name: "Mike"});
    



  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
