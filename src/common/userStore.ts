import { login } from '../api/common';
import { setToken, removeToken } from './token';
import { getUserInfo } from './../api/user';
import { router } from '../router';

export const userStore = new (class {
  async login(email: string, password: string) {
    const data = await login(email, password);
    setToken(data.authorization);
  }

  user: any;
  async feachUser() {
    this.user = await getUserInfo();
  }

  logout() {
    removeToken();
    this.user = undefined;
    router.navigate('/');
  }
})();
