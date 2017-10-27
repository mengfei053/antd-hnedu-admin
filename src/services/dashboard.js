import request from '../utils/request';
import { api } from '../../init.config'

export function query() {
  const res = request(api.dashboard)
  return res;
}
