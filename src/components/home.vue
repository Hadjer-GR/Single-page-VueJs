<!-- eslint-disable vue/multi-word-component-names -->
<template>
  
 <navBar  Active_page="Active_page" @update_active="update_active_page" ></navBar>
 <div class="container_task">
<news  v-if="news && Active_page" v-bind:list_news="news"></news>
   
 </div>
</template>
<script>
import navBar from "./navBar.vue"
import news from "./news.vue"

import axios from "axios";
export default {
    components:{navBar,news},
     created() {
       

    this.news= this.get_news()
      
    },data(){
        return{
            news:[],
            Active_page:false

        }
       
    },methods: {
        async get_news(){
        const response = await axios.get("news");
        this.news=response.data;
        },
        update_active_page(v){
            this.Active_page=v;
        }
    }
}



</script>
<style scoped>
.container_task{
    position: relative;
    margin-top: 3% !important;
}
</style>