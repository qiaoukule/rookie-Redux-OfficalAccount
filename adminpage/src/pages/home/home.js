import React, { Component, Fragment } from 'react'
import { firstLimit , secondLimit} from './style'  //怎么不起作用唉
import {connect} from 'react-redux'
import {getHomeDate} from './../../redux/actions/actionCreators'  //路径！！！终于会写了呃呃呃


import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import MultilineChartIcon from '@material-ui/icons/MultilineChart';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

require('./homestyle.css')



class Home extends Component {
   
    render() { 
        const DATE = this.props

        return ( 
            <div className="root" >
                <div className="situation">
               <div className="title"> 账号整体情况</div>
                <table className="situationTr">
                    <tbody>
                    <tr >
                        <td> <div className="situationTd"><ChatBubbleOutlineIcon></ChatBubbleOutlineIcon>新消息</div> </td>
                        <td> <div className="situationTd"><MultilineChartIcon></MultilineChartIcon>新增人数</div> </td>
                        <td> <div className="situationTd"><PersonOutlineIcon></PersonOutlineIcon>总用户数</div> </td>
                    </tr>

                    <tr>
                    <td> <div className="situationTd numberSize">{DATE.date.new_message}</div> </td>
                        <td> <div className="situationTd numberSize">{DATE.date.new_user}</div> </td>
                        <td> <div className="situationTd numberSize">{DATE.date.total_user}</div> </td>
                    </tr>
                    </tbody>
                </table>
                </div>

                <div className="newCreation">
               新的创作
               <div className="cardContainer"> 
                    <Card className="card"> 
                 
                     </Card>

                    <Card className="card"> 
                    
                    </Card>

                    <Card className="card"> 
                    
                    </Card>

                    <Card className="card"> 
                    
                    </Card>

                    <Card className="card"> 
                    
                    </Card>

                    <Card className="card"> 
                    
                    </Card>
               </div>
               
              </div> 
                
            </div>
         );
    }

    componentDidMount() {
        this.props.requestHomeDate();
    }
}
 


const mapStateToprops = (state) => {
    return {
        date : state.homeDate
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
        requestHomeDate() {  
            const action = getHomeDate();
            dispatch(action);
        }
     }
}

export default connect(mapStateToprops,mapDispatchToProps)(Home); 