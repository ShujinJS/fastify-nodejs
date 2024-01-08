import fastify from "fastify";
import { TodoModel } from './models/todos.model';

const server = fastify({logger: true});
const serverConfigs = {
    port: 5000,
}

const todos : TodoModel[] = require('./todos')

server.get('/todos', (req, reply) => {
    reply.send(todos);
});

server.get('/todos/:id', (req, reply) => {
    const params = JSON.stringify(req.params);
    const response = JSON.parse(params)

    const todoItem = todos.find( ( todo: TodoModel ) => {
        return todo.id === response.id;
    });

    
    reply.send(todoItem);
});

const start = async () => {
    try {
        await server.listen(serverConfigs);
    } catch (error) {
        server.log.error(error);
        process.exit(1);
    }
}

start();