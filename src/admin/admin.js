import React, { Component } from 'react';
import "./register/css/style.css"

class Admin extends Component {
  constructor(props) {
    super(props)
    this.state = { apiResponse: " " }
  }
  callAPI() {
    fetch("http://localhost:3001")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }))
      .then(err => err)
  }
  componentDidMount(){
    this.callAPI()
  }
  render(){
    return(
    <div className = "main" >
  <p>{this.state.apiResponse}</p>
      <div className="mainin">
        <div className="mainin1">
          <ul>
            <li>
              <span>用户名：</span>
              <input name="loginName" type="text" id="loginName" placeholder="登录名" className="SearchKeyword"></input>
            </li>
            <li>
              <span>密码：</span>
              <input type="password" name="Possword" id="Possword" placeholder="密码" className="SearchKeyword2"></input>
            </li>
            <li>
              <button className="tijiao">提交</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    )
  }
}

export default Admin;
