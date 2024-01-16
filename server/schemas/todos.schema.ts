// Schema
import { deleteTodoSchema, todoItemSchema } from './common.schema';
// Handlers
import { getTodosController, getTodoDetailsController, deleteTodoController, addTodoController, updateTodoController,  } from '../controllers/todos.controller';
// zod
import { z } from 'zod';
import { buildJsonSchemas } from 'fastify-zod';

const commonTodoParams = z.object({
    id: z.string(),
});

const commonTodoBody = z.object({
    id: z.string(),
    task: z.string(),
});

export const addTodoOpts = {
    schema: {
        response: {
            200: todoItemSchema,
        }
    },
    handler: addTodoController,
};

export const updateTodoOpts = {
    schema: {
        response: {
            200: todoItemSchema,
        }
    },
    handler: updateTodoController,
}

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
};

export const getTodoDetailsOpts = {
    schema: {
        response: {
            200: todoItemSchema,
        }
    },
    handler: getTodoDetailsController,
};

export const deleteTodoOpts = {
    schema: {
        response: {
            200: deleteTodoSchema,
        },
    },
    handler: deleteTodoController,
};

export type CommonTodoParams = z.infer<typeof commonTodoParams>;

export type CommonTodoBody = z.infer<typeof commonTodoBody>

export const { schemas: todoSchemas, $ref } = buildJsonSchemas({
    commonTodoBody,
});