<template>
    <h2 v-if="right" style="text-align: center; color: rgb(30, 213, 70);" id="secsussful"> <span><i class='bx bx-check' style='color:#1ed546; font-size: 30px !important;'  ></i></span> The article has been published successfully!</h2>
    <div class="container_write">
   <form @submit.prevent="get_submit()" style="margin-top: 2%;margin-bottom: 2%;" >
  <div class="form-group">
    <label for="exampleInputEmail1">Title </label>
    <input type="text" class="form-control"  required placeholder="Enter Title"  v-model.lazy.trim="title" autocomplete="off" >
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Content</label>
    <textarea v-if="check_update()" v-model.lazy.trim="content" class="form-control" required id="exampleInputPassword1" placeholder="Content"></textarea>
    <textarea v-if="!check_update()" v-model.lazy.trim="content" class="form-control" required id="exampleInputPassword1" placeholder="Content"></textarea>
  </div>

  <button type="submit" class="btn btn-primary" style=" background-color: rgb(47, 174, 98) !important; border: none  !important; color: #fff;">Publish</button>
  <button  v-if="check_update()"  type="submit" class="btn btn-primary btn_post_comment" style="margin-left: 15px;" @click.prevent="this.$parent.cancel_update_news()" > Cancel </button>

</form>
</div>
</template>

<script>
import axios from "axios";

 export default {
  props:["news_id"],
   
    data() {
        return {
            id:this.news_id,
            title:"",
            content:"",
            right:false,
            update_news:false
            
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
    // his.error=err.response.data.message;
   })
   setInterval(() => {
          this.right=false;
       }, 1000);
   console.log(response);
      
      } ,check_update(){
         if(this.id !=0){
          this.get_news();
         this.id=this.$parent.get_select_news_id();
         

         return  this.update_news=this.$parent.get_update_news();
         }else{
           return false
         }
      },get_submit() {
           if (this.update_news) {
            
             console.log('--------update news----------');
             console.log(this.id);
            
             this.update_news=false;

            this.$parent.UpdateNews(this.id,this.title,this.content);
             } else {
            console.log("------------create news---------------");
            this.insert_article();
             

        //this.$parent.
      //  this.$parent.UpdateComment(this.id,this.id_comment,this.comment) ;    
      }
    }, get_news(){
        axios.get(`news/${this.id}`).then((resp) => { 

          this.title=resp.data.news["title"];
          this.content=resp.data.news["content"];
           console.log(this.title);
            
          }).catch((err) => {
          console.log(err)
          // this.error=err.response.data.message;
         })
            
                 
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