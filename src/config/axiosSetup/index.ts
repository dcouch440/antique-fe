import axios from 'axios';

/**
 * @description Invoke early in the application to setup axios defaults and configurations.
 */

const axiosSetup = () => {
  axios.defaults.baseURL = 'http://localhost:3001';
};

export default axiosSetup;
