import axios from "axios";

const API = axios.create({
    baseURL : "https://task-manager-k8e2.onrender.com/api"
});

API.interceptors.request.use((req)=>{
    const user = JSON.parse(localStorage.getItem("user"));
    if(user?.token){
        req.headers.Authorization = `Bearer ${user.token}`
    }

    return req
})

export default API;