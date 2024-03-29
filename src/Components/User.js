import React, { Component } from 'react';
import { Link, Route } from '../react-router-dom';
import UserAdd from './UserAdd'
import UserList from './UserList'
import Detail from './Detail'
class Home extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (<div>
      <div className="col-xs-2">
        <div className="nav nav-stacked">
          <li><Link to="/user/add">用户添加</Link></li>
          <li><Link to="/user/list">用户列表</Link></li>
        </div>
      </div>
      <div className="col-xs-10">
        <Route path="/user/add" component={UserAdd}></Route>
        <Route path="/user/list" component={UserList}></Route>
        <Route path="/user/detail/:id" component={Detail}></Route>
      </div>
    </div>);
  }
}

export default Home;
