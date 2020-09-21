import { combineReducers } from 'redux-immutable';
import * as types from '../actions/actionTypes'

//默认的数据
const defaultState = {
   "homeDate":{
      "new_message" : "0",  
      "new_user" : "15",
      "total_user" : "2018",
   }
};

export default (state = defaultState , action) => {
   if (action.type = types.INIT_HOME_DATE) {
      const newState = JSON.parse(JSON.stringify(state));
      newState.homeDate = state.homeDate;
      return newState;
   }
   return state;
}
