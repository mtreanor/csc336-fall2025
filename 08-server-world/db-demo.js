import { MongoClient, ServerApiVersion } from 'mongodb';
const uri = "mongodb+srv://treanor_db_user:mKfmd2ZdIkOXk8m1@worlddb.ybs2shd.mongodb.net/?appName=worldDB";

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
    // await client.db("worldDB").command({ ping: 1 });
    const db = await client.db("sample_mflix");
    let flix = db.collection("comments");
    const paris = await flix.findOne({});

    let inserted = await flix.insertOne({ title: "My Movie", year: 2025 });
    console.log("!!!");
    console.log(inserted);

    await flix.updateOne(
        { title: "My Movie" },
        { $inc: { year: 100000 } 
    });

    console.log(paris);




  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);