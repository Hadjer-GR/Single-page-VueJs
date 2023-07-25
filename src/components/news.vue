<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/require-v-for-key -->
<template>

<div class="row">

     <!-- eslint-disable-next-line vue/require-v-for-key -->
  <div :v-if="list_news" v-for="item,index in list_news" class="col-sm-6" :key="index">
    <div   class="card" >

      <div   class="card-body">
        <h5 class="card-title">{{ item.title}}</h5>
        <p class="card-text" style="overflow: hidden;">{{ item.content }}</p>
        <div style="position: relative;">
       <a href="javascript:void(0)" class="btn btn-primary" style="margin-right:30px !important;" @click.prevent="read_more(index)">Read More</a>
       <div dir="rtl" style="position: absolute; right: 0px; top: 0;">
        <a href="javascript:void(0)" class="btn " @click.prevent="this.$parent.delete_news(item.id,index)"><i class='bx bx-trash-alt btn-comnent' style='color:#f02525;font-size: 25px;'  ></i></a>
        <a href="javascript:void(0)" class="btn " @click.prevent="edite_news(item.id)" ><i class='bx bxs-edit-alt btn-comnent' style='color:#f4d160; font-size: 25px;' ></i></a>
        <a href="javascript:void(0)" class="btn" @click.prevent=" writeComment('write',item.id,index,0)"><i class='bx bx-comment btn-comnent' style='color:#262424;font-size: 25px;'  ></i></a>

       </div>
        </div>

      </div>

    </div>
    
<!-- show comments  -->
    <div class="comments">

    
    <div class="row row_comment"  v-for="comment,index2 in item.comment"  :key="index2" >
      
        <div class="card_comment" >
          <div class="content_comment">
     <div class="comment"><p>{{comment.content}}</p></div>
     <div class="trush">
      <a href="javascript:void(0)" class="btn " @click.prevent="writeComment('edite',item.id,index,comment.id)" ><i class='bx bxs-edit-alt btn-comnent' style='color:black; font-size: 25px;' ></i></a>

      <a href="javascript:void(0)" class="btn " @click.prevent="this.$parent.delete_comment(comment.id,index,index2)"><i class='bx bx-trash-alt btn-comnent' style='color:#f02525;font-size: 25px;'  ></i></a>
    
    </div>
          </div>
            
        </div>
           
    </div>
  </div>
  <br>
  <!-- Write Comment -->
  <comment v-if="write_comment  && news_id==index" :comment_id="comment_id" :news_id="item.id" v-model="get_edite_comments"  ></comment>
  <!-- edite comment -->
  <!-- <comment v-if="edite_comments  && news_id==index" :edite_comment="edite_comments" :news_id="item.id"  ></comment> -->

  
   <div style="margin-left: 10px;rgba(40, 39, 39, 0.655)454242a7
  ;">
  <!--  date -->

  </div>
  
</div>

</div>
<div   :class="{transporant_back: update_new || read}">

</div>
<div   class="pop_update_news">
<write v-if="update_new" :news_id="select_news" ></write>
</div>
<div v-if="read" class="pop_update_news" style="background-color: #ffff !important;" >
  <h2 >{{ this.list_news[this.select_news].title }}</h2>
  <p  style="width: 100% !important; word-wrap: break-word !important;">{{ this.list_news[this.select_news].content }}</p>
  <button class="btn btn-primary" @click.prevent="cancel_update_news()"> back</button>
</div>

</template>

<script>
import comment from './write_comment.vue';
import axios from "axios";
import write from './write_news.vue';

export default {
   props:["list_news"],

   components:{
    comment,write
   },
   data(){
    return{
     list_of_news:this.list_news,
     write_comment:false,
    editeComment:false,
    comment_id:0,
    comment:"",
    update_new:false,
    select_news:0,
    read:false,
    
    }
   },methods: {
   writeComment(type,id,index,id_comment){
    this.comment_id=id_comment;
    if(type=="write"){
      this.editeComment=false;
     this.write_comment=!this.write_comment;
       this.news_id=index;
       console.log(id,index);
    }else{
      this.comment_id=id_comment;
      this.editeComment=true;
     this.write_comment=!this.write_comment;
       this.news_id=index;
    }
    

    console.log(this.editeComment);
     },
     async storeComment(id,comment_w){
       const comment={
        content:comment_w,
        news_id:id
       };
       console.log(id);
       console.log(comment_w);
       const response = await axios.post('comments',comment).then(() => { 
        // update comments Section

        this.$parent.update_comments();
            
   }).catch((err) => {
   console.log(err)
   // this.error=err.response.data.message;
  })
     

  console.log(response);

     },
     async UpdateComment(id,comment_id,update_content){
       const comment={
        content:update_content,
        news_id:id
       
       };
       console.log(update_content);
     this.editeComment=false;
     console.log(comment_id);
       await axios.put(`comments/${comment_id}`,comment).then((resp) => { 
        console.log("update---------------")
       console.log(update_content);
        // update comments Section
        console.log(resp);
        this.$parent.update_comments();
        
            
   }).catch((err) => {
   console.log(err)
   // this.error=err.response.data.message;
  })
     

     },get_edite_comment(){
      
       return this.editeComment;
     },get_update_news(){
      return this.update_new;
     },
     edite_news(id){
      this.select_news=id;
       this.update_new=true;
     },
     get_select_news_id(){
      return this.select_news;
     },
     cancel_update_news(){
      this.update_new=false;
      this.read=false;
       this.select_news=0;
     },
      async UpdateNews(id,title_update,content_update){
       const news={
        title:title_update,
        content:content_update
       
       };
       this.update_new=false;
       
        await axios.put(`news/${id}`,news).then((resp) => { 
        console.log("update---------------")
        console.log(resp);
        // update news section
        console.log(resp);
        this.$parent.get_news();
        
            
   }).catch((err) => {
   console.log(err)
   // this.error=err.response.data.message;
  })
     

     }, read_more(index){
      this.select_news=index;
      console.log("--------------index--------")
      console.log(this.select_news);
       this.read=true;
     },
   },
}
</script>
<style >
.row{
  display: flex;
  flex-direction: row;
  
  position: relative !important;
  width: 100vw !important;
}
.col-sm-6{
  position: relative !important;
   width: 100vw !important;


}
.card{
  flex-basis: 40%;
    position: relative;
    margin: 10px !important;
    box-shadow: 5px 5px 5px 4px rgb(0, 0, 0,0.11);
}
.btn-primary {
    color: black;
    font-weight: 600;
    font-size: 1.1em;
    background-color: #F4D160 !important;
    border-color: #F4D160 !important;
    transition: all 0.2s;
}
.btn-primary:hover{
    transform: scale(1.1);
    color: black !important;
}
.comment{
  position: relative;
  flex-basis: 80%;
}
.trush{
 position: relative !important;
 display: flex;
 flex-direction: row !important;
}
.btn-comnent{
 
    transition: all 0.2s;
    /* border-color: #F4D160 !important; */
}
.btn-comnent:hover{
    transform: scale(1.1);
}
.comments{
  position: relative;
  max-height: 200px;
  overflow-y: scroll;
}
.row_comment{
  position: relative;
  height: auto;
  display: flex;
  width: 70% !important;
  flex-direction: column !important;
  flex-wrap: nowrap !important;
  margin-bottom: 5px;
  max-height: 250px !important;
  /* overflow-y: scroll; */
  margin-left: 20px;
  
}
.card_comment {
  border-radius: 10px;
  filter: drop-shadow(0 5px 10px 0 #ffffff);
  width: auto;
margin-bottom: 5px;
  height: auto;
  background-color: #f1f1f1;
  padding: 5px;
  position: relative;
  z-index: 0;
  overflow: hidden;
  color: black;
  margin-left: 20px;
  transition: 0.6s ease-in;
}
.content_comment{
  display: flex;
  flex-direction: row;
}
.card_comment::before {
  content: "";
  position: absolute;
  z-index: -1;
  top: -15px;
  right: -15px;
  background: #F4D160;
  height:220px;
  width: 25px;
  border-radius: 32px;
  transform: scale(1);
  transform-origin: 50% 50%;
  transition: transform 0.25s ease-out;
}

.card_comment:hover::before{
    transition-delay:0.2s ;

  transform: scale(40);
}

.card_comment:hover{
    color: #ffffff;
}

.comment {
  width: 80% !important;

}
.card_comment p{
    padding: 5px ;
    width: 100% !important;
    overflow: hidden !important;
    word-wrap: break-word !important;
}
.pop_update_news{
  position: absolute;
  z-index: 4;
  height: auto;
  padding: 20px;
  top: 0%;
  

  border-radius: 10px;
  background-color:none;
  left: 15%;
  width: 80%;
}
.pop_update_news .container_write{
  background-color: #ffff;
  padding: 15px;
}
.transporant_back{
  position: absolute;
  z-index: 2;
  width: 100vw;
  top: -19%;
  height: 200vh;
  overflow: hidden;
  opacity: 0.9;
  background: #f4d160ce;

}
</style>