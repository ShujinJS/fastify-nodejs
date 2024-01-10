// Models
import { TodoModel } from '../models/todos.model';

import { todos } from '../todos';

import Fastify, { FastifyReply, FastifyRequest } from "fastify";


export function getTodosController (req: any, reply: any) {
    reply.send(todos);
}

export function getTodoDetailsController (req: any, reply: any) {
    // const params = JSON.stringify(req.params);
    // const response = JSON.parse(params)

    const todoItem = todos.find( (todo: TodoModel) => {
        return todo.id === req.params.id;
    });

    reply.send(todoItem);
}