
import http from "./httpService";

const apiEndPoint = "/auth/";
const tokenKey = "token";
const id = "id";

export async function login(obj:object) {
  const { data } = await http.post(`${apiEndPoint}register/`, obj);
  return data
}

export async function otp(obj:object) {
  const { data } = await http.post(`${apiEndPoint}signin/`, obj);
  loginWithJwt(data.token);
  setMobile(data.id);
  return data
}

export function loginWithJwt(jwt:string) {
  localStorage.setItem(tokenKey, jwt);
}

export function setMobile(given_id:string) {
  localStorage.setItem(id, given_id);
}


export function logout() {
  if(typeof window !== 'undefined'){
    localStorage.removeItem(tokenKey);
    localStorage.removeItem(id);
  }
}


//این سرویس با اینکه مشابه دارد ولی بابت اینکه تعداد ریکوئست کمتر به سرور و همچنین دیتای سریع سینکرونس داشته باشیم ایجاد شده
export function getCurrentUser() {
  //Is the same of getUser()
  try {
    const jwt = localStorage.getItem(tokenKey);
    if (jwt) {
      return true
    }
  } catch (ex) {
    return null;
  }
}

export function getJwt() {
  if (typeof window !== "undefined") {
    return localStorage.getItem(tokenKey);
  }
  // return tokenKey
}

export function getID() {
  if(typeof window !== "undefined"){
    return localStorage.getItem(id);
  }
}

export default {
  login,
  loginWithJwt,
  logout,
  getCurrentUser,
  getJwt,
  otp,
  setMobile,
  getID
};
