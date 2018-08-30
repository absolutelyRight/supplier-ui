import axios from 'axios';

let base = 'http://localhost:8080';

// export const requestLogin = params => { return axios.post(`${base}/login`, params).then(res => res.data); };

var instance = axios.create({
    headers: {'content-type': 'application/x-www-form-urlencoded'}
});

export const testApi = params => { return instance.post(`manager/fang/get`, {}).then(res => res.data); };
export const supplierRegister = params => { return instance.post(`manager/supplier/add`, params).then(res => res.data); };
export const getSuppliersList = params => { return instance.post(`manager/supplier/get`, {}).then(res => res.data); };
export const requestLogin = params => { return axios.get(`/static/user.json`, {}); };
export const register = params => { return axios.post(`${base}/supplier/register`,params).then(res => res.data);};

export const addTender = params => { return axios.post(`${process.env.API_ROOT}tender/add`, params).then(res => res.data); };

export const getMessage = params => { return axios.post(`${process.env.API_ROOT}message/get`, params).then(res => res.data); };

export const getMessageList = params => { return axios.post(`${process.env.API_ROOT}message/list`, params).then(res => res.data); };

// export const getUserList = params => { return axios.get(`${base}/user/list`, { params: params }); };
//
// export const getUserListPage = params => { return axios.get(`${base}/user/listpage`, { params: params }); };
//
// export const removeUser = params => { return axios.get(`${base}/user/remove`, { params: params }); };
//
// export const batchRemoveUser = params => { return axios.get(`${base}/user/batchremove`, { params: params }); };
//
// export const editUser = params => { return axios.get(`${base}/user/edit`, { params: params }); };
//
// export const addUser = params => { return axios.get(`${base}/user/add`, { params: params }); };
