"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todos_schema_1 = require("./../schemas/todos.schema");
async function todosRoutes(server) {
    server.post('/todos/add/:id-:task', todos_schema_1.addTodoOpts);
    server.put('/todos/update/:id-:task', todos_schema_1.updateTodoOpts);
    server.get('/todos', todos_schema_1.getTodosOpts);
    server.get('/todos/:id', todos_schema_1.getTodoDetailsOpts);
    server.delete('/todos/delete/:id', todos_schema_1.deleteTodoOpts);
}
exports.default = todosRoutes;
;
