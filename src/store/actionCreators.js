import * as actionType from './actionType';

export const getInputChange = (input) => ({
    type: actionType.CHANGE_INPUT_VALUE,
    value: input
})

export const getAddTodoItem = () => ({
    type: actionType.ADD_TODO_ITEM,
})

export const getDeleteItem = (index) => ({
    type: actionType.DELETE_TODO_ITEM,
    index
})