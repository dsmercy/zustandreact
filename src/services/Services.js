import axios from "axios";


axios.defaults.baseURL= "https://localhost:7069/api/";
// axios.defaults.withCredentials= true;

const responseBody =(response)=> response.data;

//request interceptors
axios.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
})


const requests ={
    get: (url, params)=> axios.get(url, {params}).then(responseBody),
    post: (url, body)=> axios.post(url, body).then(responseBody),
    put: (url, body)=> axios.put(url, body).then(responseBody),
    delete: (url)=> axios.put(url).then(responseBody)
}

let email = "";
const storeData = JSON.parse(localStorage.getItem("account"));
if(storeData){
    const userDataString = storeData.state.signedInUserData[0];
    email = userDataString?.data?.users?.email;
}
if(storeData){console.log('signedInUserData',email);}

const Account ={
    userlogin : (values)=>requests.post('Account/Login', values),
    register : (values)=> requests.post('Account/SignUp',values),
    forgetPassword: (values)=> requests.post(`Account/ForgotPassword?Email=${values.email}&Domain=${values.domain}`),
    generateOTP : (values)=> requests.post(`Account/GenerateOTP?Email=${values}`,values),
    resetPassword: (values)=>requests.post(`Account/ResetPassword`, (values)),
    getUser: () => requests.get(`getuser?emailid=${email}`),
}

const Services ={
    Account
}




export default Services;