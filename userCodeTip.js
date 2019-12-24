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
			"import React, { ${1:Component}, Fragment } from 'react';",
			"",
			"class ${2:App} extends  ${1:Component} {",
			"  render() {",
			"    return (",
			"      <Fragment>",
			"        ${3:coding}",
			"      </Fragment>",
			"     );",
			"  }",
			"}",
			"",
			"export default ${2:App};"
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
			"import React, {${1:Component} , Fragment } from 'react';",
			"import ${2:store} from './${2}';",
			"",
			"class ${4:App} extends ${1:Component} {",
			"constructor(props){",
			"    super(props);",
			"    this.handleStoreChange = this.handleStoreChange.bind(this);",
			"    store.subscribe(this.handleStoreChange);",
			"}",
			"",
			"  render() {",
			"    return (",
			"      <Fragment>",
			"        ${5:coding}",
			"      </Fragment>",
			"     );",
			"  }",
			"  handleStoreChange() {",
			"    this.setState(store.getState());",
			"  }",
			"}",
			"",
			"export default ${4:App};"
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
	},
	"react-redux": {
		"prefix": "reactredux",
		"body": [
			"import React, { ${1:PureComponent}, Fragment } from 'react';",
			"import { connect } from 'react-redux'",
			"",
			"class ${2:APP} extends ${1:PureComponent} {",
			"    render() {",
			"      return (",
			"        <Fragment>",
			"           coding",
			"        </Fragment>",
			"    );",
			"  }",
			"}",
			"",
			"//state指store中的数据",
			"const mapStateToProps = (state) => {",
			"  return {",
			"  }",
			"}",
			"",
			"//store.dispatch; props",
			"const mapDispatchToProps = (dispatch) => {",
			"  return {",
			"    //方法",
			"  }",
			"}",
			"",
			"export default connect(mapStateToProps, mapDispatchToProps)(${2:APP});"
		],
		"description": "if comonents"
	},
	"styled": {
		"prefix": "styled",
		"body": [
			"export const ${1:str}=styled.${2:div}`",
			"   ${3}",
			"`;"
		]
	}
}
