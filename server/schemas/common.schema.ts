export const todoItemSchema = {
    type: 'object',
    properties: {
        id: {
            type: 'string'
        },
        task: {
            type: 'string'
        }
    }
}

export const deleteTodoSchema = {
    type: 'object',
    properties: {
        msg: {
            type: 'string'
        }
    }
}