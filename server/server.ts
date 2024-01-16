// Fastify
import Fastify, { FastifyInstance } from "fastify";
import { fastifySwagger } from "@fastify/swagger";
import fastifySwaggerUi from '@fastify/swagger-ui';
// Routes
import todosRoutes from './routes/todos.route';
// Schemas
import { todoSchemas } from "./schemas/todos.schema";

const fastify : FastifyInstance = Fastify( { logger: true } );
const serverConfigs = {
    port: 5000,
}

for (const schema of [...todoSchemas]) {
  fastify.addSchema(schema);
}

fastify.register(fastifySwagger, {
    swagger: {
        info: {
            title: 'Todo Swagger',
            version: '0.1.0',
        },
        host: `127.0.0.1:5000`,
        schemes: ['http'],
        consumes: ['application/json'],
        produces: ['application/json'],
        securityDefinitions: {
          apiKey: {
            type: 'apiKey',
            name: 'apiKey',
            in: 'header',
          },
        },
    }
});

fastify.register(fastifySwaggerUi, {
    routePrefix: '/swagger',
  });

fastify.register(todosRoutes);

const start = async () => {
    try {
        await fastify.listen(serverConfigs);
    } catch (error) {
        fastify.log.error(error);
        process.exit(1);
    }
}

start();