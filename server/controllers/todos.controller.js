"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodoController = exports.getTodoDetailsController = exports.getTodosController = exports.updateTodoController = exports.addTodoController = void 0;
const todos_1 = require("../todos");
function addTodoController(req, reply) {
    const { id, task } = req.params;
    const taskToSend = {
        id: id ? id : '5',
        task: task ? task : 'Hello there!'
    };
    todos_1.todos.push(taskToSend);
    reply.send(taskToSend);
}
exports.addTodoController = addTodoController;
function updateTodoController(req, reply) {
    const { id, task } = req.params;
    const taskToSend = {
        id,
        task: task ? task : 'Updated task.',
    };
    todos_1.todos.map((todo) => {
        if (todo.id === id) {
            todo.task = task || 'Updated task.';
        }
    });
    reply.send(taskToSend);
}
exports.updateTodoController = updateTodoController;
function getTodosController(req, reply) {
    reply.send(todos_1.todos);
}
exports.getTodosController = getTodosController;
function getTodoDetailsController(req, reply) {
    const { id } = req.params;
    const todoItem = todos_1.todos.find((todo) => {
        return todo.id === id;
    });
    reply.send(todoItem);
}
exports.getTodoDetailsController = getTodoDetailsController;
function deleteTodoController(req, reply) {
    const { id } = req.params;
    const todoIndex = todos_1.todos.findIndex((todo) => {
        return todo.id === id;
    });
    todos_1.todos.splice(todoIndex, 1);
    return { msg: 'Your task is abandoned.' };
}
exports.deleteTodoController = deleteTodoController;
