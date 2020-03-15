import axios from 'axios';
import {BASEURL} from '../../../global.config';
const axiosInstance = axios.create({
	baseURL: BASEURL,
	timeout: 8000,
	headers: {'Content-Type': 'application/x-www-form-urlencoded'},
	transformResponse: [
		function(res) {
			return JSON.parse(res);
		}
	]
});

export default axiosInstance;
