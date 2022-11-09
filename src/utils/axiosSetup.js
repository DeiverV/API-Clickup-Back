import axios from "axios"

const token = "43170836_078fce69421b9ba55e793241ed4b6f5aa0fedd4a";

axios.defaults.baseURL = 'https://api.clickup.com/api/v2';
axios.defaults.headers.common = {'Authorization': `${token}`}

export default axios;