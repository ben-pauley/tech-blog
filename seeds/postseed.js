const { Post } = require("../models");

const postData = [
  {
    title: "Test post 1",
    content: "Test content 1",
    user_id: 1,
  },
  {
    title: "Test post 2",
    content: "Test content 2",
    user_id: 2,
  },
  {
    title: "Test post 3",
    content: "Test content 3",
    user_id: 3,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
