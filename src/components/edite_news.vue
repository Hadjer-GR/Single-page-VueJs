<template>
 <h2 v-if="right" style="text-align: center; color: rgb(30, 213, 70);" id="secsussful"> <span><i class='bx bx-check' style='color:#1ed546; font-size: 30px !important;'  ></i></span> The article has been published successfully!</h2>
    <div class="container_write">
   <form @submit.prevent="update_article()" style="margin-top: 2%;margin-bottom: 2%;" >
  <div class="form-group">
    <label for="exampleInputEmail1">Title </label>
    <input type="text" class="form-control"  required placeholder="Enter Title"  v-model.lazy.trim="title" autocomplete="off" >
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Content</label>
    <textarea v-model.lazy.trim="content" class="form-control" required id="exampleInputPassword1" placeholder="Content"></textarea>
  </div>
  
  <button type="submit" class="btn btn-primary">Update</button>
</form>
</div>
</template>
<script>
</script>
<style scoped>

</style>