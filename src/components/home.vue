<!-- eslint-disable vue/multi-word-component-names -->
<template>
  
 <navBar  Active_page="Active_page" @update_active="update_active_page" @click.prevent="get_news()" ></navBar>
 <div class="container_task">
   <news  v-if="news && Active_page" v-bind:list_news="news"  ></news>
   <write v-if="!Active_page"></write>
 </div>
</template>
<script>
import navBar from "./navBar.vue"
import news from "./news.vue"
import write from './write_news.vue';


import axios from "axios";
export default {
    components:{write,navBar,news},
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
           console.log(response);
        },
        update_active_page(v){
            this.Active_page=v;
        },
        delete_news(id,index){
     
              const response = axios.delete(`news/${id}`).then((resp) => {
              console.log(resp);
             this.news.splice(index,1);
            

            }).catch(error => {
        console. error(error);
          });

           console.log(response);

           
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