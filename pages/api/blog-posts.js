// import clientPromise from "../../lib/mongodb";

// export default async (req, res) => {
//   try {
//     const client = await clientPromise;
//     const db = client.db("Mimo's-Blog");

//     const blogPosts = await db
//       .collection("blog-posts")
//       .find({})
//       .sort({ metacritic: -1 })
//       .limit(10)
//       .toArray();

//     res.json(blogPosts);
//   } catch (e) {
//     console.error(e);
//   }
// };

// import nextConnect from "next-connect";
// import middleware from "../../middleware/database";

// const handler = nextConnect();

// handler.use(middleware);

// handler.get(async (req, res) => {
//   let doc = await req.db.collection("blog-posts").findOne();
//   console.log(doc);
//   res.json(doc);
// });

// export default handler;
// export default (req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "application/json");
//   res.end(JSON.stringify({ message: "Hello from the Daily route" }));
// };

// import { connectToDatabase } from "../../utils/mongodb";

// export default async function handler(req, res) {
//   const { db } = await connectToDatabase();
//   const data = await db.collection("blog-posts").find({}).limit(20).toArray();
//   console.log(data);
//   res.json(data);
// }

import clientPromise from "../../utils/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("NextJs-Blog");
  switch (req.method) {
    case "POST":
      let bodyObject = JSON.parse(req.body);
      let myPost = await db.collection("blog-posts").insertOne(bodyObject);
      res.json(myPost.ops[0]);
      break;
    case "GET":
      const allPosts = await db.collection("blog-posts").find({}).toArray();
      res.json({ status: 200, data: allPosts });
      break;
  }
}
