// Fastify
import Fastify, { FastifyInstance, RouteShorthandOptions } from "fastify";
import { Server, IncomingMessage, ServerResponse } from 'http';
import { fastifySwagger } from "@fastify/swagger";

// Routes
import todosRoutes from './routes/todos.route';

const fastify : FastifyInstance = Fastify( { logger: true } );
const serverConfigs = {
    port: 5000,
}

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