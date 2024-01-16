// Schemas
import { FastifyInstance } from 'fastify';
import { getTodosOpts, getTodoDetailsOpts, deleteTodoOpts, addTodoOpts, updateTodoOpts, } from './../schemas/todos.schema';

export default async function todosRoutes ( server: FastifyInstance ) {
    server.post('/todos/add/:id-:task', addTodoOpts);

    server.put('/todos/update/:id-:task', updateTodoOpts);

    server.get('/todos', getTodosOpts);
    
    server.get('/todos/:id', getTodoDetailsOpts);

    server.delete('/todos/delete/:id', deleteTodoOpts);

};