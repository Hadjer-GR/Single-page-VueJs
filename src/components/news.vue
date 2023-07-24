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
       <a href="javascript:void(0)" class="btn btn-primary" style="margin-right:30px !important;">Read More</a>
       <div dir="rtl" style="position: absolute; right: 0px; top: 0;">
        <a href="javascript:void(0)" class="btn " @click.prevent="this.$parent.delete_news(item.id,index)"><i class='bx bx-trash-alt btn-comnent' style='color:#f02525;font-size: 25px;'  ></i></a>
        <a href="javascript:void(0)" class="btn " ><i class='bx bxs-edit-alt btn-comnent' style='color:#f4d160; font-size: 25px;' ></i></a>
        <a href="javascript:void(0)" class="btn" @click.prevent="writeComment(item.id,index)" ><i class='bx bx-comment btn-comnent' style='color:#262424;font-size: 25px;'  ></i></a>

       </div>
        </div>

      </div>

    </div>
    
<!--  comment div -->

    <div class="row row_comment"  v-for="comment,index2 in item.comment"  :key="index2" >
      
        <div class="card_comment">
          <div class="content_comment">
     <div class="comment"><p>{{comment.content}}</p></div>
     <div class="trush">
      <a href="javascript:void(0)" class="btn " @click.prevent="this.$parent.delete_comment(comment.id,index,index2)"><i class='bx bx-trash-alt btn-comnent' style='color:#f02525;font-size: 25px;'  ></i></a>
     </div>
          </div>
            
        </div>
           
    </div>
  
  <!-- Write Comment -->
  <comment v-if="write_comment &&news_id==index" :news_id="item.id"></comment>
   <div style="margin-left: 10px;rgba(40, 39, 39, 0.655)454242a7
  ;">
   </div>

  </div>
  
</div>
</template>

<script>
import comment from './write_comment.vue';
import axios from "axios";

export default {
   props:["list_news"],
   components:{
    comment
   },
   data(){
    return{
     list_of_news:this.list_news,
     write_comment:false,
     news_id:-1
    }
   },methods: {
   writeComment(id,index){
      this.write_comment=!this.write_comment;
      
       this.news_id=index;
    
     
     },
     async storeComment(id,comment_w){
       const comment={
        content:comment_w,
        news_id:id
       };
       console.log(id);
       console.log(comment_w);
       const response = await axios.post('comments',comment).then((resp) => { 
        // update comments Section

        this.$parent.update_comments();
        console.log(resp);
            
   }).catch((err) => {
   console.log(err)
   // this.error=err.response.data.message;
  })
     

  console.log(response);

     }
   },
}
console.log("hi");
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
.btn-comnent{
 
    transition: all 0.2s;
    /* border-color: #F4D160 !important; */
}
.btn-comnent:hover{
    transform: scale(1.1);
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
  overflow-y: scroll;
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

.card_comment p{
    padding: 5px ;
}
</style>