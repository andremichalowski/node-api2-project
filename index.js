//imports
const express = require("express");
const server = express();

const postRoutes = require("./posts/postRoutes");


//api routes
server.use("/", (req, res) => res.send("API up and running!"));

server.use('/api/posts/', postRoutes);


//listening
const port = 3000;
server.listen(port, () => console.log(`Server running... on ${port}`));
