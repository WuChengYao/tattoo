import axios from 'axios'
import store from '@/store/index.js'

axios.interceptors.request.use(
  (confing) => {
    // console.log('攔截請求');
    store.commit('Set_Loading', true);
    return confing;
  },
  (error) => {
    store.commit('Set_Loading', false);
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    // console.log('攔截回應');
    store.commit('Set_Loading', false);
    return response;
  },
  (error) => {
    store.commit('Set_Loading', false);
    return Promise.reject(error);
  }
);
export default axios;