/* eslint-disable no-unused-vars */
import { createRouter,createWebHashHistory } from "vue-router";

import register from "./components/register";
import login from "./components/login";
import home from "./components/home";



const router=createRouter({
    history: createWebHashHistory(),
    routes:[
    {path:"/",component:login},
    {path:"/register",component:register},
    {path:"/news",component:home}

    ]
});
export default router;