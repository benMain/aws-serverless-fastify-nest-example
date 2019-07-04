import { bootstrap } from './app';

async function startLocal() {
  const fastifyInstance = await bootstrap();
  fastifyInstance.listen(3000);
}

startLocal();
