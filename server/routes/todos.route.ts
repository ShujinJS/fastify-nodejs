// Models
import { TodoModel } from '../models/todos.model';
// Schemas
import { getTodosOpts, getTodoDetailsOpts } from './../schemas/todos.schema';

import { todos } from '../todos';

export default function todosRoutes (server: any, options: any, done: any) : void {

    server.get('/todos', getTodosOpts);
    
    server.get('/todos/:id', getTodoDetailsOpts);

    done();
}