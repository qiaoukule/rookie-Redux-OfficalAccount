import React, { Component } from 'react';
import {   Route,  Link, Router } from 'react-router-dom'  //路由配置
import Picture from './picture';
class Show extends Component {
    
    render() { 
        return (
              <div>
                    <Route   path='/picture' component= {Picture} ></Route>
                </div>
          );
    }
}
 
export default Show;