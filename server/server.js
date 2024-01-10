"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Fastify
const fastify_1 = __importDefault(require("fastify"));
// Routes
const todos_route_1 = __importDefault(require("./routes/todos.route"));
const fastify = (0, fastify_1.default)({ logger: true });
const serverConfigs = {
    port: 5000,
};
fastify.register(todos_route_1.default);
const start = async () => {
    try {
        await fastify.listen(serverConfigs);
    }
    catch (error) {
        fastify.log.error(error);
        process.exit(1);
    }
};
start();
