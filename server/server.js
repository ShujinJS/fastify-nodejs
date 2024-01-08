"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const server = (0, fastify_1.default)({ logger: true });
const serverConfigs = {
    port: 5000,
};
const todos = require('./todos');
server.get('/todos', (req, reply) => {
    reply.send(todos);
});
server.get('/todos/:id', (req, reply) => {
    console.log(req);
    // const { id } = req.params;
    const todoItem = todos.find((todo) => {
        return todo.id === req.params.id;
    });
    reply.send(todoItem);
});
const start = async () => {
    try {
        await server.listen(serverConfigs);
    }
    catch (error) {
        server.log.error(error);
        process.exit(1);
    }
};
start();
