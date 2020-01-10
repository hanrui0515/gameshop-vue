import Axios, {AxiosInstance, AxiosRequestConfig} from 'axios';

export interface LoginUserData {
  name: string;
  password: string;
}

export interface RegisterUserData {
  name: string;
  password: string;
  passwordConfirmation: string;
  nickname: string;
  avatarImage?: Blob;
}

export interface RetrieveGoodsParams {
  limit?: number;
  offset?: number;
}

let runtimeAccessToken: string | undefined = void 0;

export default class AxiosUtil {

  public static resolveAxios(c?: (axios: AxiosInstance) => AxiosInstance) {
    const accessToken = this.getAccessToken();

    const axios = Axios.create({
      baseURL: process.env.BASE_URL || '',
      headers: {
        ...(accessToken ? {authorization: 'Bearer ' + accessToken} : {}),
      },
    });
    axios.interceptors.response.use((response) => {
      if (response.data.error) {
        return Promise.reject(response.data.error);
      }
      return response;
    }, (err) => {
      return Promise.reject(err);
    });

    return c ? c(axios) : axios;
  }

  public static getAccessToken(): string | undefined {
    if (runtimeAccessToken) {
      return runtimeAccessToken;
    }
    if (localStorage.getItem('token')) {
      return localStorage.getItem('token')!;
    }
    return void 0;
  }

  public static setAccessToken(token: string) {
    runtimeAccessToken = token;
  }

  public static loginUser(data: LoginUserData, options?: AxiosRequestConfig) {
    return this.resolveAxios().post('/api/v1/user/login', data, options);
  }

  public static logoutUser(options?: AxiosRequestConfig) {
    return this.resolveAxios().post('/api/v1/user/logout', void 0, options);
  }

  public static registerUser(data: RegisterUserData, options?: AxiosRequestConfig) {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('password', data.password);
    formData.append('passwordConfirmation', data.passwordConfirmation);
    formData.append('nickname', data.nickname);
    if (data.avatarImage) {
      formData.append('avatarImage', data.avatarImage);
    }
    return this.resolveAxios().put('/api/v1/user/register', data, options);
  }

  public static retrieveGoods(params: RetrieveGoodsParams, options?: AxiosRequestConfig) {
    return this.resolveAxios().get('/api/v1/shop/goods', {...options, params});
  }

}
