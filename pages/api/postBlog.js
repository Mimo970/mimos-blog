// const multer = require("multer");
// const upload = multer({ dest: "uploads/" });
import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const Client = await MongoClient.connect(
      "mongodb+srv://mimo1500:35309105Adr@cluster0.gryelc8.mongodb.net/NextJs-Blog?retryWrites=true&w=majority"
    );
    const database = Client.db();

    const blogPostsCollection = database.collection("blog-posts");

    const result = await blogPostsCollection.insertOne(data);

    console.log(result);

    Client.close();

    res.status(201).json({ message: "Blog Posted" });
  }

  //   res.send(req.body);
}

/* export const config = {
  api: {
    bodyParser: {
      sizeLimit: "4mb", // Set desired value here
    },
  },
}; */
