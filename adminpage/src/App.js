import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
// using ES6 modules
import { BrowserRouter, Route, Link } from "react-router-dom";
import Navbar from './components/navbar/navbar'
import Sidebar from './components/sidebar/sidebar'
import routers from './Router/index'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


//这里配置路由
class App extends Component {
    render() {
        return (

            <Provider store={store}>
                <BrowserRouter>
                    <div>
                        <Navbar />
                        <Grid container spacing={3}>
                            <Grid item xs={2}>
                                <Paper>
                                    <Sidebar />
                                </Paper>
                            </Grid>
                            <Grid item xs={10}>
                                <Paper>
                                    {
                                        routers.map((route, key) => {
                                            if (route.exact) {
                                                return (
                                                    <Route key={key} path={route.path} exact render={props => (
                                                        <route.component {...props} />  //说实话，不知道有什么参数要传进来~~
                                                    )} />
                                                )
                                            } else {
                                                return (
                                                    <Route key={key} path={route.path} render={props => (
                                                        <route.component {...props} />  //说实话，不知道有什么参数要传进来~~
                                                    )} />
                                                )
                                            }
                                        })
                                    }
                                </Paper>
                            </Grid>
                        </Grid>
                    </div>
                </BrowserRouter>
            </Provider>
        )
    }
}

export default App;