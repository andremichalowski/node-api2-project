//imports
const express = require("express");
const server = express();
server.use(express.json());

const postRoutes = require("./posts/postRoutes");

//api routes
server.use("/api/posts", postRoutes);
server.use("/", (req, res) => res.send("API up and running!"));

//listening
const port = 3000;
server.listen(port, () => console.log(`Server running... on ${port}`));
