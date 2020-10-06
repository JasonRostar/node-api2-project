const express = require('express');
const PostsRouter = require('./data/db-router');
const port = 5000;
const server = express();

server.use(express.json());
server.use(PostsRouter)



server.listen(port, () => { console.log(`\n Server listening on port ${port} \n`) })