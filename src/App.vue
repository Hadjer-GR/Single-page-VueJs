<template>

<router-view></router-view>

 
</template>

<script>



import axios from "axios";


export default {
  components:{},
    created() {
      console.log("created");
    },
  methods: {
      async getData(){
      
      axios.get("http://exam.tlancer.net/api/news")
      .then(res => {
        this.usersList = res.data;
        console.log(this.usersList)
        

      })
      .catch(error => {
        console.log(error)
         // Manage errors if found any
      })

      }
    },
    data(){
    return{
  active_page:0,
  pages:[
 {
    link: {text:"Home",url:"home.html"},
    Content: "this is home page",
    title:"Home"

 },{
    link:{text:"Featurs",url:"Featurs.html"},
    Content: "this is Featurs page",
    title:"Featurs"
 },{
    link:{text:"Pricing",url:"Pricing.html"},
    Content: "this is Pricing page",
    title:"Pricing"
 },
 {
    link:{text:"Disabled",url:"disabled.html"},
    Content: "this is Disabled page",
    title:"Disabled"
 }



  ],

  new_item:"" };

}
}

</script>