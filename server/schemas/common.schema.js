"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodoSchema = exports.todoItemSchema = void 0;
exports.todoItemSchema = {
    type: 'object',
    properties: {
        id: {
            type: 'string'
        },
        task: {
            type: 'string'
        }
    }
};
exports.deleteTodoSchema = {
    type: 'object',
    properties: {
        msg: {
            type: 'string'
        }
    }
};
