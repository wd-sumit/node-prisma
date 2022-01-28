/**=require( * Module dependencies.
 */
import { createServer } from 'http';

// import { env, normalizePort } from "@helpers/utils";
// import logger from "@helpers/logger";

process.on('uncaughtException', (err) => {
  console.log('Uncaught Excception! Shutting down...');
  console.log(`name: ${err.name} message: ${err.message}`);
  console.log(err);
  process.exit(1);
});

import app from '@src/app';

/**
 * Get port from environment and store in Express.
 */

// let port = normalizePort(env("PORT", 3000));
app.set('port', 3000);

/**
 * Create HTTP server.
 */
const server = createServer(app);

/**
 * Event listener for HTTP server "error" event.
 */
let port = 3000;
const onError = (error) => {
  if (error.syscall !== 'listen') throw error;
  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      // logger.error(`${bind} requires elevated privileges`);
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
    case 'EADDRINUSE':
      port += 1;
      // logger.error(`${bind} is already in use, trying ${port}`);
      console.error(`${bind} is already in use, trying ${port}`);
      server.listen(port);
      break;
    default:
      throw error;
  }
};

/**
 * Event listener for HTTP server "listening" event.
 */
const onListening = () => {
  const address = server.address();
  const bind =
    typeof address === 'string' ? `pipe ${address}` : `port: ${address.port}`;

  // logger.info(`🚀 We are live on ${bind}`);
  console.log(`🚀 We are live on ${bind}`);
};

process.on('unhandledRejection', (err) => {
  console.log('Unhandled Rejection! Shutting down...');
  console.log(`error: ${err.name} message: ${err.message}`);
  console.log(err);
  server.close(() => {
    process.exit(1);
  });
});

/**
 * Establish Connection
 */
server.listen(3000);

/**
 * Listen on provided port, on all network interfaces.
 */
server.on('error', onError);
server.on('listening', onListening);
