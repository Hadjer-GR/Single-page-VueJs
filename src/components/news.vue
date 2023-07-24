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
        <a href="javascript:void(0)" class="btn" ><i class='bx bx-comment btn-comnent' style='color:#262424;font-size: 25px;'  ></i></a>

       </div>
        </div>

      </div>

    </div>
   <div style="margin-left: 10px;rgba(40, 39, 39, 0.655)454242a7
  ;">
    <p class="card-text" >Updated_at : {{ item.updated_at }}</p>
   </div>

  </div>
  
</div>
</template>

<script>

export default {
   props:["list_news"],
   data(){
    return{
     list_of_news:this.list_news
    }
   }
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
.btn-comnent{
 
    transition: all 0.2s;
    /* border-color: #F4D160 !important; */
}
.btn-comnent:hover{
    transform: scale(1.1);
}
</style>