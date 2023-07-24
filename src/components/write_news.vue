<template>
    <h2 v-if="right" style="text-align: center; color: rgb(30, 213, 70);" id="secsussful"> <span><i class='bx bx-check' style='color:#1ed546; font-size: 30px !important;'  ></i></span> The article has been published successfully!</h2>
    <div class="container_write">
   <form @submit.prevent="insert_article()" style="margin-top: 2%;margin-bottom: 2%;" >
  <div class="form-group">
    <label for="exampleInputEmail1">Title </label>
    <input type="text" class="form-control"  required placeholder="Enter Title"  v-model.lazy.trim="title" autocomplete="off" >
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Content</label>
    <textarea v-model.lazy.trim="content" class="form-control" required id="exampleInputPassword1" placeholder="Content"></textarea>
  </div>
  
  <button type="submit" class="btn btn-primary">Publish</button>
</form>
</div>
</template>

<script>
import axios from "axios";

 export default {
    data() {
        return {
            title:"",
            content:"",
            right:false
        }
    },methods: {
        async insert_article(){
          const  dd={
            'title':   this.title,
            'content':  this.content
            }
  
    const response = await axios.post('news',dd).then((resp) => { 
        
         this.right=true;

         console.log(resp);
    }).catch((err) => {
    console.log(err)
    // this.error=err.response.data.message;
   })
   setInterval(() => {
            this.right=false;
         }, 1000);
   console.log(response);
       
        }
    },
 }
 </script>
 <style scoped>
.container_write{
    width: 70% ;
    padding: 15px 10px;
    margin-top: 7%;
    border-radius: 5px;
    height: 80%;
    font-size: 1.2em;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 1px 0px 5px 2px rgba(0,0,0,0.11);

}
 </style>