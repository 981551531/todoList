{
	"con": {
		"prefix": "con",
		"body": [
			"console.log(${1:str})"
		],
		"description": "con comonents"
	},
	"if": {
		"prefix": "ifu",
		"body": [
			"if (${1:condition}) {",
			"    ${2:coding}",
			"}"
		],
		"description": "if comonents"
	},
	"constructor": {
		"prefix": "constructor",
		"body": [
			"constructor(props){",
			"    super(props);",
			"    ${1:code}",
			"}"
		],
		"description": "if comonents"
	},
	"react": {
		"prefix": "react",
		"body": [
			"import React, { Component, Fragment } from 'react';",
			"",
			"class ${1:App} extends Component {",
			"  render() {",
			"    return (",
			"      <Fragment>",
			"        ${2:coding}",
			"      </Fragment>",
			"     );",
			"  }",
			"}",
			"",
			"export default ${1:App};"
		],
		"description": "if comonents"
	},
	"reactDom": {
		"prefix": "reactDom",
		"body": [
			"import React from 'react';",
			"import ReactDOM from 'react-dom';",
			"import ${1:App} from './${1:App}';",
			"",
			"",
			"ReactDOM.render(<${1:App} />, document.getElementById('root'));"
		],
		"description": "if comonents"
	},
	"store.dis": {
		"prefix": "store.dis",
		"body": [
			"store.dispatch(${1:action});"
		],
		"description": "if comonents"
	},
	"store.get": {
		"prefix": "store.get",
		"body": [
			"store.getState();"
		],
		"description": "if comonents"
	},
	"store.sub": {
		"prefix": "store.sub",
		"body": [
			"store.subscribe(${1:this.handleStoreChange});"
		],
		"description": "if comonents"
	},
	"reactStoreChange": {
		"prefix": "reactStoreChange",
		"body": [
			"import React, { Component, Fragment } from 'react';",
			"import ${1:store} from './${2}';",
			"",
			"class ${3:App} extends Component {",
			"constructor(props){",
			"    super(props);",
			"    this.handleStoreChange = this.handleStoreChange.bind(this);",
			"    store.subscribe(this.handleStoreChange);",
			"}",
			"",
			"  render() {",
			"    return (",
			"      <Fragment>",
			"        ${4:coding}",
			"      </Fragment>",
			"     );",
			"  }",
			"  handleStoreChange() {",
			"    this.setState(store.getState());",
			"  }",
			"}",
			"",
			"export default ${3:App};"
		],
		"description": "if comonents"
	},
	"creactStore": {
		"prefix": "creactStoreDome",
		"body": [
			"import { createStore } from 'redux';",
			"import reducer from './${1:reducer}'",
			"const store = createStore(",
			"   reducer,",
			"   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()",
			"${2}",
			");",
			"export default store;"
		],
		"description": "if comonents"
	},
	"reduxDome": {
		"prefix": "reduxDome",
		"body": [
			"const defaultState = {};",
			"//reducer 可以接受state，但是绝不能修改原来的state",
			"export default (state = defaultState, action) => {",
			"  return state;",
			"}"
		],
		"description": "if comonents"
	}
}