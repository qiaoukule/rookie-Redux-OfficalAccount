import Home from '../pages/home/home'
import Message from '../pages/message/message'
import PictureMaterial from '../pages/pictureMaterial'
import Picture from '../pages/pictureMaterial/picture'

let routers = [  //很多对象，所有要遍历~
    { path:'/', component:Home , exact: true },
    { path:'/message', component:Message  },
    { path:'/pictureMaterial', component:PictureMaterial  },
   
]

export default routers;