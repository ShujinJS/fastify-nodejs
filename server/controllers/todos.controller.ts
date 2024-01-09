// Models
import { TodoModel } from '../models/todos.model';

import { todos } from '../todos';

export function getTodosController (req: any, reply: any) {
    reply.send(todos);
}

export function getTodoDetailsController (req: any, reply: any) {
    const params = JSON.stringify(req.params);
    const response = JSON.parse(params)

    const todoItem = todos.find( (todo: TodoModel) => {
        return todo.id === response.id;
    });

    reply.send(todoItem);
}