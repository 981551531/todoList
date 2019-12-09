import React, { Component, Fragment } from 'react';
import axios from 'axios'
import store from './store/index';
import * as actionCreate from './store/actionCreators';
import TodoListUI from './todoListUi';

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = store.getState();
        console.log(this.state);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleDelete = this.handleDelete.bind(this)
        store.subscribe(this.handleStoreChange);
    }

    render() {
        return (
            <Fragment>
                <TodoListUI
                    inputValue={this.state.inputValue}
                    handleInputChange={this.handleInputChange}
                    handleBtnClick={this.handleBtnClick}
                    list={this.state.list}
                    handleDelete={this.handleDelete}

                />
            </Fragment>
        );
    }

    componentDidMount() {
       /*  axios.get('/list.json').then(redate => {
            let data = redate.data;
            //const action = getInitListsAction(data)
            const action = actionCreate.getInitListsAction(data);

            store.dispatch(action);
        }) */

        const action=actionCreate.getInitLists()
        store.dispatch(action);

        //使用redux-thunk的方式
        /*  const action = actionCreate.getInitLists();
         store.dispatch(action); */

    }

    handleInputChange(e) {
        const action = actionCreate.getInputChange(e.target.value)
        store.dispatch(action)
    }

    handleStoreChange() {

        this.setState(store.getState());
    }

    handleBtnClick() {
        const action = actionCreate.getAddTodoItem()
        store.dispatch(action);
    }

    handleDelete(index) {
        const action = actionCreate.getDeleteItem(index);
        store.dispatch(action);

    }
}

export default TodoList;
