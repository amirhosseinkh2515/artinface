import axios from "axios";
import { toast } from "react-toastify";
import NgProgress from "nprogress";
import { getJwt, getID } from "./authService";
import auth from "./authService";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.params = {}

axios.interceptors.request.use((config: any) => {
  if (typeof window !== "undefined") {
    NgProgress.start();
  }
  const jwt = getJwt();
  const id = getID();
  if (jwt) {
    config.headers["Authorization"] = "Basic " + jwt;
    config.headers["X-Consumer-Custom-id"] = id;
  }
  config.headers["Accept-Language"] = "fa";
  return config;
});

axios.interceptors.response.use(
  (response) => {
    if (typeof window !== "undefined") {
      NgProgress.done();
    }
    return response;
  },
  (error) => {
    if (typeof window !== "undefined") {
      NgProgress.done();
    }

    const ex = error.response;

    if (ex && ex.status === 400) {
      console.log("400 error: ", ex.data);
      if (ex.data.detail) {
        toast.error(ex.data.detail);
      }
      else if (ex.data.files) {
        toast.error(ex.data.files[0].non_field_errors[0]);
      }
      else
        toast.error(ex.data[Object.keys(ex.data)[0]][0]);
    } else if (ex && ex.status === 500) {
      toast.error(" خطای اتصال لطفا بعدا تلاش کنید ");
    } else if (ex && ex.status === 401) {
      console.log("401 error: ", ex.data.detail);
      auth.logout();
      console.log(ex.config.url, "ex.config.url")
      if (ex.config.url === "/auth/signin/") {
        toast.error(ex.data.detail);
      }
      else {
        toast.error("برای انجام عملیات وارد سایت شوید یا ثبت نام کنید");
      }
    } else if (ex && ex.status === 402) {
      console.log("402 error");
    } else if (ex && ex.status === 403) {
      console.log("403 error");
      toast.error(ex.data.detail);
    } else if (ex && ex.status === 404) {
      console.log("404 error");
    } else if (ex && ex.status === 406) {
      console.log("406 error");
      toast.error(ex.data.detail);
    } else if (ex && ex.status === 409) {
      console.log("409 error");
    } else if (ex && ex.status === 429) {
      console.log("429 error");
      toast.error(ex.data.detail);
    }

    return Promise.reject(error);
  }
);

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete,
};
