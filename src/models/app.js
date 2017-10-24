import queryString from 'query-string'
import * as menusQuery  from '../services/menus'

export default {

  namespace: 'app',
  state: {},

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      return history.listen((location,search)=>{
        dispatch({type:'query'})
        if(location.pathname === '/groupintro'){

        }
      })
    },
  },

  effects: {
    * fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
    * query({ payload }, { call, put}){
      const menus = yield call(menusQuery.query);
      console.log(menus);
      yield put({type:'save',payload:{menus}})
    }
  },

  reducers: {
    updateState(state,{ payload }){
      return {
        ...state,
        ...payload
      }
    },
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
