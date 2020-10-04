import React, { Component } from 'react';
import { Menu } from 'antd';
import 'antd/dist/antd.css';
import Picture from './picture';
import { Route, Link, Router } from 'react-router-dom'  //路由配置
import routers from './../../Router/index'

class PictureMaterial extends Component {
    state = {
        current: 'mail',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({ current: e.key });
    };
    //这里涉及二级路由了，得回去补一补二级路由的用法
    render() {
        return (
            <div>
                <div>多媒体素材</div>
                <div>
                    <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                        <Menu.Item key="picture" >
                            <Link to='/picture' >图片</Link>
                        </Menu.Item>
                        <Menu.Item key="video"  >
                            视频
                        </Menu.Item>

                        <Menu.Item key="music">
                            <a>
                                音乐
                        </a>
                        </Menu.Item>
                    </Menu>
                    <Picture/>
                    <div>这个二级路由为啥不在自己的div里显示呢，把整个页面都弄掉了
                          <Route path='/picture' component={Picture} ></Route>
                    </div>


                </div>
            </div>
        )

    }
}

export default PictureMaterial;