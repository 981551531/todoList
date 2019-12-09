import React, { Fragment } from 'react';
import { connect } from 'react-redux';

//无状态组件的写法
const TodoList = props => {

  return (
    <Fragment>
      <div>
        <input placeholder="todo info"
          value={props.inputValue}
          onChange={props.ChangeValue}
        />
        <button onClick={props.handleClick}>提交</button>
      </div>
      <ul>
        {
          props.list.map((item, index) => {
            return (<li onClick={() => { props.deleteItem(index) }} key={index}>{item}</li>)
          })
        }

      </ul>
    </Fragment>
  );
}



const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

const mapDispatchToProps = dispatch => {
  return {
    ChangeValue(e) {
      let v = e.target.value;
      const action = {
        type: 'change_input_value',
        value: v
      }
      dispatch(action);
    },

    handleClick() {
      const action = {
        type: 'add_item'
      }
      dispatch(action);
    },
    deleteItem(index) {
      alert(index)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

