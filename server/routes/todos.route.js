"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Schemas
const todos_schema_1 = require("./../schemas/todos.schema");
function todosRoutes(server, options, done) {
    server.get('/todos', todos_schema_1.getTodosOpts);
    server.get('/todos/:id', todos_schema_1.getTodoDetailsOpts);
    done();
}
exports.default = todosRoutes;
