import { createServer } from 'http';

import express from 'express';

import { env } from './env.js';

const app = express();
const server = createServer(app);

server.listen(env.PORT, () => {
  console.log(`http server listening on port ${env.PORT}`);
});

const gracefulShutdown = () => {};

process.on('SIGINT', gracefulShutdown);
process.on('SIGTERM', gracefulShutdown);
process.on('SIGUSR2', gracefulShutdown);
