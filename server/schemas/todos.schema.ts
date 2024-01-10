// Schema
import { todoItemSchema } from './common.schema';
// Handlers
import { getTodosController, getTodoDetailsController } from '../controllers/todos.controller';

import Fastify, { RouteShorthandOptions } from "fastify";

export const getTodosOpts = {
    schema: {
        response: {
            200: {
                type: 'array',
                items: todoItemSchema,
            }
        }
    },
    handler: getTodosController, 
}

export const getTodoDetailsOpts = {
    schema: {
        response: {
            200: todoItemSchema,
        }
    },
    handler: getTodoDetailsController,
}