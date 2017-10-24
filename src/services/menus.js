import request from '../utils/request';
import { api } from '../../init.config'

export function query() {
  return request(api.menus);
}
