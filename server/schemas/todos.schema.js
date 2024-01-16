"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.$ref = exports.todoSchemas = exports.deleteTodoOpts = exports.getTodoDetailsOpts = exports.getTodosOpts = exports.updateTodoOpts = exports.addTodoOpts = void 0;
// Schema
const common_schema_1 = require("./common.schema");
// Handlers
const todos_controller_1 = require("../controllers/todos.controller");
// zod
const zod_1 = require("zod");
const fastify_zod_1 = require("fastify-zod");
const commonTodoParams = zod_1.z.object({
    id: zod_1.z.string(),
});
const commonTodoBody = zod_1.z.object({
    id: zod_1.z.string(),
    task: zod_1.z.string(),
});
exports.addTodoOpts = {
    schema: {
        response: {
            200: common_schema_1.todoItemSchema,
        }
    },
    handler: todos_controller_1.addTodoController,
};
exports.updateTodoOpts = {
    schema: {
        response: {
            200: common_schema_1.todoItemSchema,
        }
    },
    handler: todos_controller_1.updateTodoController,
};
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
exports.deleteTodoOpts = {
    schema: {
        response: {
            200: common_schema_1.deleteTodoSchema,
        },
    },
    handler: todos_controller_1.deleteTodoController,
};
_a = (0, fastify_zod_1.buildJsonSchemas)({
    commonTodoBody,
}), exports.todoSchemas = _a.schemas, exports.$ref = _a.$ref;
