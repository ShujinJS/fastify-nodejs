// Fastify
import { FastifyReply, FastifyRequest } from "fastify";
// Schemas
import { CommonTodoParams, CommonTodoBody, } from './../schemas/todos.schema';
// Models
import { TodoModel } from '../models/todos.model';

import { todos } from '../todos';

export function addTodoController (
    req: FastifyRequest<{
        Params: CommonTodoBody,
    }>,
    reply: FastifyReply
) {
    const { id, task } = req.params;

    const taskToSend : TodoModel = {
        id: id ? id : '5',
        task: task ? task : 'Hello there!'
    }

    todos.push(taskToSend);

    reply.send(taskToSend);
}

export function updateTodoController (
    req: FastifyRequest<{
        Params: CommonTodoBody,
    }>,
    reply: FastifyReply
) {
    const { id, task } = req.params;

    const taskToSend : TodoModel = {
        id,
        task: task ? task : 'Updated task.',
    };

    todos.map( (todo : TodoModel) => {
        if(todo.id === id) {
            todo.task = task || 'Updated task.'
        }
    });

    reply.send(taskToSend);
}

export function getTodosController (req: FastifyRequest, reply: FastifyReply) {
    reply.send(todos);
}

export function getTodoDetailsController (
    req: FastifyRequest<{
        Params: CommonTodoParams,
    }>, 
    reply: FastifyReply
) {
    const { id } = req.params;

    const todoItem = todos.find( ( todo: TodoModel ) => {
        return todo.id === id;
    });

    reply.send(todoItem);
}

export function deleteTodoController (
    req: FastifyRequest<{
        Params: CommonTodoParams,
    }>,
    reply: FastifyReply
) {
    const { id } = req.params;

    const todoIndex = todos.findIndex( (todo: TodoModel) => {
        return todo.id === id;
    });

    todos.splice(todoIndex, 1);

    return { msg: 'Your task is abandoned.'}
}