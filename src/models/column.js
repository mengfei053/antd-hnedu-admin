/**
 * Created by MHF on 2017/10/25.
 */
import queryString from 'query-string'
import * as request  from '../services/request'
import { api } from '../../init.config'

export default {

  namespace: 'column',
  state: {},

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      return history.listen((location,search)=>{
        dispatch({type:'query'})
      })
    },
  },

  effects: {
    * fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
    * query({ payload }, { call, put}){
      const { data } = yield call(request.query,api.column);
      const { sidebar, tableData } = yield data
      yield put({type:'save',payload:{sidebar,tableData}})
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
