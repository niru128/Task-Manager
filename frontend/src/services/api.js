import axios from "axios";

const API = axios.create({
    baseURL : "https://task-manager-2-1xqw.onrender.com/api"
});

API.interceptors.request.use((req)=>{
    const user = JSON.parse(localStorage.getItem("user"));
    if(user?.token){
        req.headers.Authorization = `Bearer ${user.token}`
    }

    return req
})

export default API;