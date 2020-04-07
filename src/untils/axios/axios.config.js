import axios from 'axios';
const axiosInstance = axios.create({
	timeout: 8000,
	headers: {},
	transformResponse: [
		function(res) {
			return JSON.parse(res);
		}
	]
});

export default axiosInstance;
