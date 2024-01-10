"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTodoDetailsController = exports.getTodosController = void 0;
const todos_1 = require("../todos");
function getTodosController(req, reply) {
    reply.send(todos_1.todos);
}
exports.getTodosController = getTodosController;
function getTodoDetailsController(req, reply) {
    // const params = JSON.stringify(req.params);
    // const response = JSON.parse(params)
    const todoItem = todos_1.todos.find((todo) => {
        return todo.id === req.params.id;
    });
    reply.send(todoItem);
}
exports.getTodoDetailsController = getTodoDetailsController;
