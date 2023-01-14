import { Schema, model, models } from "mongoose";

const blogPostSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  category: {
    type: Array,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
});

const Blog = models.Blog || model("Blog", blogPostSchema);

export default Blog;
