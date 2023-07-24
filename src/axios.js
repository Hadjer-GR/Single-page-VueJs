import axios from "axios";

axios.defaults.baseURL="http://exam.tlancer.net/api/";
axios.defaults.headers.common['Authorization']="Bearer "+localStorage.getItem("token");