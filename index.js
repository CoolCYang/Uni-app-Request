import http from './interface'
import Vue from 'vue'

export const post = (data, url) => {

	//设置请求前拦截器
	http.interceptor.request = (config) => {
		config.header = {
			"Content-Type": "application/x-www-form-urlencoded"
		}
	}
	
	//设置请求结束后拦截器
	http.interceptor.response = (response) => {
		// console.log("response", response);
		return response;
	}

	return http.request({
		dataType: 'json',
		method: 'POST',
		url: url,
		data,
	});
}
export const get = (data, url) => {
	
	//设置请求前拦截器
	http.interceptor.request = (config) => {
		config.header = {
			"Content-Type": "application/x-www-form-urlencoded",
			"Cookie": "my_dev=" + data.dev
		}
	}

	//设置请求结束后拦截器
	http.interceptor.response = (response) => {
		return response;
	}

	return http.request({
		dataType: 'json',
		method: 'GET',
		url: url,
		data,
	});
} 
export default {
	post,
	get
}
