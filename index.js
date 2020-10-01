const express = require('express');
const server = express();

server.get("/", (req, res) => res.send("API up and running!"));

const port = 3000;
server.listen(port, () => console.log(`Server running... on ${port}`));
