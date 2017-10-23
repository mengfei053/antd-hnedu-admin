import queryString from 'query-string'
import { query } from '../services/example'

export default {

  namespace: 'app',
  state: {},

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      return history.listen((location,search)=>{
        if(location.pathname === '/groupintro'){
          dispatch({type:'query'})
        }
      })
    },
  },

  effects: {
    * fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
    * query({ payload }, { call, put}){
      const data = yield call( query )
      console.log(data);
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
