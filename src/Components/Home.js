import React,{Component} from 'react';
import {HashRouter as Router,Route} from 'react-router-dom'
class Home extends Component {
  constructor(props){
    super(props)
  }
  render(){
    console.log(this.props)
    return (<div>
    		首页
    	</div>);
  }
}

export default Home;