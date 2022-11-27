import { request } from '../common/request';

export const getUserInfo = async () => {
  return request.get<any, any>('/user/userinfo');
};
