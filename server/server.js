"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Fastify
const fastify_1 = __importDefault(require("fastify"));
const swagger_1 = require("@fastify/swagger");
const swagger_ui_1 = __importDefault(require("@fastify/swagger-ui"));
// Routes
const todos_route_1 = __importDefault(require("./routes/todos.route"));
// Schemas
const todos_schema_1 = require("./schemas/todos.schema");
const fastify = (0, fastify_1.default)({ logger: true });
const serverConfigs = {
    port: 5000,
};
for (const schema of [...todos_schema_1.todoSchemas]) {
    fastify.addSchema(schema);
}
fastify.register(swagger_1.fastifySwagger, {
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
fastify.register(swagger_ui_1.default, {
    routePrefix: '/swagger',
});
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
