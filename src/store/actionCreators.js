import axios from 'axios';

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

export const getInitListsAction = (data) => {

    return ({
        type: actionType.INIT_LIST,
        data
    })
}


//redux-thunk 中间件的使用方式
/* export const getInitLists = (data) => {
    return (dispatch) => {
        axios.get('/list.json').then(redate => {
            let data = redate.data;
            //const action = getInitListsAction(data)
            const action=  {
                type: actionType.INIT_LIST,
                data
            } 
            dispatch(action);
        })
    }
} */




