export const setToken = (token: string) => {
  return localStorage.setItem('authorization', token);
};

export const getToken = () => {
  return localStorage.getItem('authorization') as string;
};

export const removeToken = () => {
  localStorage.removeItem('authorization');
};
