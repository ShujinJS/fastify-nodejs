// Fastify
import fastify from "fastify";
// Routes
import todosRoutes from './routes/todos.route';

const server = fastify({logger: true});
const serverConfigs = {
    port: 5000,
}

server.register(require('fastify-swagger'));
server.register(todosRoutes);

const start = async () => {
    try {
        await server.listen(serverConfigs);
    } catch (error) {
        server.log.error(error);
        process.exit(1);
    }
}

start();