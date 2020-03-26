import axiosInstance from './axios';
function GET(url) {
	return function(target, name) {
		return {
			writable: false,
			enumerable: true,
			value: function(params) {
				// 获取请求参数
				return new Promise((resolve, reject) => {
					axiosInstance
						.get(url, {
							validateStatus: function(status) {
								return status < 400; // 状态码在大于或等于500时才会 reject
							}
						})
						.then(res => {
							resolve(res);
						})
						.catch(err => {
							throw new Error(
								JSON.stringify({
									url,
									error: err,
									method: 'GET'
								})
							);
						});
				});
			}
		};
	};
}
function POST(url) {
	return function(target, name) {
		return {
			writable: false,
			enumerable: true,
			value: function(params) {
				// 获取请求参数
				return new Promise((resolve, reject) => {
					axiosInstance
						.post(url, params, {
							validateStatus: function(status) {
								return status < 400; // 状态码在大于或等于500时才会 reject
							}
						})
						.then(res => {
							resolve({data: res.data, message: res.statusText});
						})
						.catch(err => {
							throw new Error(
								JSON.stringify({
									url,
									error: err,
									method: 'POST'
								})
							);
						});
				});
			}
		};
	};
}

export default {GET, POST};
