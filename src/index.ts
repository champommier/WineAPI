import {WineapiLoopbackApplication} from './application';
import {ApplicationConfig} from '@loopback/core';

export {WineapiLoopbackApplication};

export async function main(options: ApplicationConfig = {}) {
  const app = new WineapiLoopbackApplication(options);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping to check`);
  console.log('test');

  return app;
}
