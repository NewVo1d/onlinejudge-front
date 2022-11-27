import { request } from '../common/request';

export const login = async (email: string, password: string) => {
  const data = {
    email: email,
    password: password
  };

  return request.post<any, any>('/common/login', data);
};
