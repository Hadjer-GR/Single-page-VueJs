<template>
   <div>
      <form style="margin-left: 20px; right: 0; width: 70%!important;">
  <div class="form-group write_comment" >
    <textarea  class="form-control"  v-model.lazy.trim="content" ></textarea>
  </div>
  <div style="position: relative;">
     
    <!-- <button v-if="!this.edite"  type="submit" class="btn btn-primary btn_post_comment"  > Publish comment</button> -->
    <button  v-if="edite_comments"   class="btn btn-primary btn_post_comment"  @click="get_edite()" >Update  </button>
    <button   v-else  class="btn btn-primary btn_post_comment" @click="get_edite()"  >Publish  </button>
   
  </div>
</form>
    </div>
</template>


<script>

export default {
    props:["news_id"],
 
data(){
      return{
     content:"",
     id:this.news_id,
     edite_comments:this.$parent.get_edite_comment()
    
   }},methods: {
      empty_content(){
        this.content="";
      },get_submit(){
       
            if(!this.edite_comment){
               this.$parent.storeComment(this.id,this.content);
                 this.empty_content();
                 console.log("publish");
            }else{
              this.$parent.edie_comment(this.content);
              console.log(this.submit_url);
              console.log("edite");

            
        }    
      },close_edite(){
        this.$emit("update_edite_comment",false);
      },get_edite(){
        console.log(this.edite_comments);
      }
   },
   
}
</script>

<style scoped>
.btn_post_comment{
    position: absolute; bottom: -10px; right: 0px; color: #ffff;background-color: #1d1b18 !important;
    border: none !important;
}
.btn_post_comment:hover{
    color: #ffff !important;
}
</style>