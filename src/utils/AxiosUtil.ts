import Axios, {AxiosInstance, AxiosRequestConfig} from 'axios';

export interface UserLoginData {
  name: string;
  password: string;
}

export interface UserRegisterData {
  name: string;
  password: string;
  passwordConfirmation: string;
  nickname: string;
  avatarImage?: Blob;
}

export default class AxiosUtil {

  public static resolveAxios(c?: (axios: AxiosInstance) => AxiosInstance) {
    const axios = Axios.create({
      baseURL: process.env.BASE_URL || '',
    });

    return c ? c(axios) : axios;
  }

  public static userLogin(data: UserLoginData, options?: AxiosRequestConfig) {
    return this.resolveAxios().post('/api/v1/user/login', data, options);
  }

  public static userLogout(options?: AxiosRequestConfig) {
    return this.resolveAxios().post('/api/v1/user/logout', void 0, options);
  }

  public static userRegister(data: UserRegisterData, options?: AxiosRequestConfig) {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('password', data.password);
    formData.append('passwordConfirmation', data.passwordConfirmation);
    formData.append('nickname', data.nickname);
    if (data.avatarImage) {
      formData.append('avatarImage', data.avatarImage);
    }
    return this.resolveAxios().post('/api/v1/user/register', data, options);
  }

}
