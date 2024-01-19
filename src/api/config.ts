import axios from 'axios';

export const APP_API: string = process.env.REACT_APP_API_URL || '';
export const APP_VERSION: string = 'v1';

axios.defaults.baseURL = `${APP_API}/${APP_VERSION}`;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

// Set the User-Agent header
axios.defaults.headers.common['User-Agent'] = 'iona_cats_exercise';
axios.defaults.headers.common['x-api-key'] = process.env.REACT_APP_API_KEY || '';

axios.interceptors.response.use(
	function (response) {
		// Any status code that lie within the range of 2xx cause this function to trigger
		// Do something with response data
		return response;
	},
	function (error) {
		// Any status codes that falls outside the range of 2xx cause this function to trigger
		// Do something with response error
		const res = error.response;
		const statusCode = res.status;
		const { config } = error;

		if (!config || !config.retry) {
			if (res) {
				console.log(res.data);
			} else {
				console.error(error);
			}
			console.log('status code: ', statusCode);
			return Promise.reject(error);
		}

		config.retry -= 1;
		const delayRetryRequest = new Promise<void>((resolve) => {
			setTimeout(() => {
				console.log('Retrying the request', config.url);
				resolve();
			}, config.retryDelay || 2000);
		});
		return delayRetryRequest.then(() => axios(config));
	}
);
