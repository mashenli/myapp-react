import React, { Component } from 'react';
// import "./style.css"
const API = require('../../../api/serverapi')

class Admin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      apiResponse: '',
      name: '',
      password: ''
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  callAPI() {
    fetch(API.adminAPI)
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }))
      .then(err => err)
  }
  componentDidMount() {
    this.callAPI()
  }
  handleNameChange(e) {
    this.setState({ name: e.target.value })
  }
  handlePassChange(e) {
    this.setState({ password: e.target.value })
  }
  handleSubmit(e) {
    let filter = {
      name: "123"
    }
    let getInformation = {
      method: 'POST',
      headers: {
        'contentType': 'application/json;charset=UTF-8',
        'Accept': 'application/json',
      },
      body: JSON.stringify(filter),
      mode: 'cors'
    }
    fetch(API.adminAPI, getInformation)
      .then(res => {
        res.text()
        console.log(res)
      })
      .then(err => console.log(err))
  }
  render() {
    return (
      <div className="main" >
        <div className="mainin">
          <div className="mainin1">
            <ul>
              <li>
                <span>用户名：</span>
                <input name="loginName" type="text" className="SearchKeyword" id="loginName"
                  placeholder="登录名" value={this.state.value} onChange={this.handleNameChange}>
                </input>
              </li>
              <li>
                <span>密码：</span>
                <input type="password" name="Possword" id="Possword" placeholder="密码" className="SearchKeyword2"
                  value={this.state.value} onChange={this.handlePassChange}>
                </input>
              </li>
              <li>
                <button className="tijiao" onClick={this.handleSubmit}>提交</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Admin;
