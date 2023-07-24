import axios from "axios";

axios.defaults.baseURL="http://exam.tlancer.net/api/";
axios.defaults.headers.common['Authorization']="bearer"+localStorage.getItem("token");