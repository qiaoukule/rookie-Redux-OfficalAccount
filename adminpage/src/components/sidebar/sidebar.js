import React, { Component , Fragment } from 'react';
import { connect } from 'react-redux'
import { SidebarBox , BigLi, SmallLi, Icon} from './style'
import HomeIcon from '@material-ui/icons/Home';
import AppsIcon from '@material-ui/icons/Apps';
import DraftsIcon from '@material-ui/icons/Drafts';
import InsertChartIcon from '@material-ui/icons/InsertChart';
import Card from '@material-ui/core/Card';

class Siderbar extends Component {
    render() { 
        return (
        <Fragment>
          <SidebarBox>
              <BigLi> <a href='/'> <Icon> <HomeIcon/> </Icon>首页</a></BigLi>
              <BigLi> <Icon>  <AppsIcon/> </Icon>功能</BigLi>
              <SmallLi><a href='/message'>自动回复</a></SmallLi>
              <SmallLi><a>留言管理</a></SmallLi>
              <SmallLi><a>投票管理</a></SmallLi>
              <BigLi> <Icon>  <DraftsIcon/> </Icon>管理</BigLi>
              <SmallLi><a>消息管理</a></SmallLi>
              <SmallLi><a>用户管理</a></SmallLi>
              <BigLi> <Icon>  <InsertChartIcon/> </Icon>统计</BigLi>
              <SmallLi><a>用户分析</a></SmallLi>
              <SmallLi><a>内容分析</a></SmallLi>
          </SidebarBox>
        </Fragment>
    )
     } ;
}

export default Siderbar;