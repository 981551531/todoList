import React, { Component, Fragment } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';

class TodoListUI extends Component {
    render() {
        return (
            <Fragment>
                <div style={{ margin: "8px" }}>
                    <Input
                        placeholder="todoinfo"
                        value={this.props.inputValue}
                        style={{ width: "300px", marginRight: "8px" }}
                        onChange={this.props.handleInputChange}
                    />
                    <Button
                        type="primary"
                        onClick={this.props.handleBtnClick}
                    >提交</Button>

                    <List
                        style={{ width: "300px", marginTop: "10px" }}
                        bordered
                        dataSource={this.props.list}
                        renderItem={(item, index) => (
                            <List.Item onClick={index => { this.props.handleDelete(index) }}> 
                                {item}
                            </List.Item>
                        )}
                    />
                </div>
            </Fragment>
        );
    }
}

export default TodoListUI;