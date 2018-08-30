import axios from 'axios';
let base = '';
var instance = axios.create({
    headers: {'content-type': 'application/x-www-form-urlencoded'}
});
export const requestLogin = params => { return axios.post(`${base}/login`, params).then(res => res.data); };

export const testApi = params => { return instance.post(`manager/fang/get`, {}).then(res => res.data); };

export const getSuppliersList = params => { return instance.post(`manager/supplier/get`, {}).then(res => res.data); };

export const getUserList = params => { return axios.get(`${base}/user/list`, { params: params }); };

export const getUserListPage = params => { return axios.get(`${base}/user/listpage`, { params: params }); };

export const removeUser = params => { return axios.get(`${base}/user/remove`, { params: params }); };

export const batchRemoveUser = params => { return axios.get(`${base}/user/batchremove`, { params: params }); };

export const editUser = params => { return axios.get(`${base}/user/edit`, { params: params }); };

export const addUser = params => { return axios.get(`${base}/user/add`, { params: params }); };


export const getTenderList = params => {return axios.post(`${process.env.API_ROOT}tender/list`, params).then(res => res.data); };

export const selectTender = params => { return axios.post(`${process.env.API_ROOT}tender/select`, params).then(res => res.data); };

export const defineTender = params => { return axios.post(`${process.env.API_ROOT}tender/define`, params).then(res => res.data); };