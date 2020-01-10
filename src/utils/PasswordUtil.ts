import CryptoJS from 'crypto-js';

export default class PasswordUtil {
  public static makeHashedPassword(plainPassword: string) {
    return CryptoJS.MD5(CryptoJS.MD5(plainPassword).toString()).toString();
  }
}
