import request from '../utils/request';
export function query(url) {
  const res = request(url)
  return res;
}
