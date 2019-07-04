import {
  Context,
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
} from 'aws-lambda';
import { bootstrap } from './app';
import * as fastify from 'fastify';
import { proxy } from 'aws-serverless-fastify';

let fastifyServer: fastify.FastifyInstance;

export const handler = async (
  event: APIGatewayProxyEvent,
  context: Context,
): Promise<APIGatewayProxyResult> => {
  if (!fastifyServer) {
    fastifyServer = await bootstrap();
  }
  return await proxy(fastifyServer, event, context);
};
