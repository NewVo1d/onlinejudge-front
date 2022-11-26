import { login } from '../api/user';
import { setToken } from './token';

export const userStore = new (class {
  async login(email: string, password: string) {
    const data = await login(email, password);
    setToken(data.authorization);
  }
})();
