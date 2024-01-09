"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTodoDetailsOpts = exports.getTodosOpts = void 0;
// Schema
const common_schema_1 = require("./common.schema");
// Handlers
const todos_controller_1 = require("../controllers/todos.controller");
exports.getTodosOpts = {
    schema: {
        response: {
            200: {
                type: 'array',
                items: common_schema_1.todoItemSchema,
            }
        }
    },
    handler: todos_controller_1.getTodosController,
};
exports.getTodoDetailsOpts = {
    schema: {
        response: {
            200: common_schema_1.todoItemSchema,
        }
    },
    handler: todos_controller_1.getTodoDetailsController,
};
