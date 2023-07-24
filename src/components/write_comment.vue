<template>
   <div>
      <form style="margin-left: 20px; right: 0; width: 70%!important;" @submit.prevent="this.$parent.storeComment(id,content) &&  empty_content()">
  <div class="form-group write_comment" >
    <textarea  class="form-control"  v-model.lazy.trim="content" ></textarea>
  </div>
  <div style="position: relative;">
    <button  type="submit" class="btn btn-primary btn_post_comment" >Post Comment</button>

  </div>
</form>
    </div>
    
</template>


<script>

export default {
    props:["news_id"]
   ,data(){
      return{
     content:"",
     id:this.news_id
   }},methods: {
      empty_content(){
        this.content="";
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