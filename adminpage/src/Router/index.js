import Home from '../pages/home/home'
import Message from '../pages/message/message'

let routers = [  //很多对象，所有要遍历~
    { path:'/', component:Home , exact: true },
    { path:'/message', component:Message  },
]

export default routers;