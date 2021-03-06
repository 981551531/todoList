import * as actionType from './actionType';

const defaultState = {
    inputValue: '',
    list: []
};

//reducer 可以接受state，但是绝不能修改原来的state
export default (state = defaultState, action) => {

    if (action.type === actionType.CHANGE_INPUT_VALUE) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }

    if (action.type === actionType.ADD_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = "";
        console.log(newState)
        return newState;
    }
    if (action.type === actionType.DELETE_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1);
        return newState;
    }

    if (action.type === actionType.INIT_LIST) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list=action.data;

        return newState;
    }
    return state;
}