<!-- eslint-disable vue/multi-word-component-names -->
<template>
  
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">News</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item" >
          <a class="nav-link"  :class="{ active: !isActive}" @click.prevent="change_write() " href="javascript:void(0)" >Home <span class="sr-only"></span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"></a>
        </li>
        
        <li class="nav-item" >
          <a class="nav-link "  :class="{ active: isActive}"  @click.prevent="change_home()" href="javascript:void(0)">Write</a>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <a href="javascript:void(0)" @click.prevent="logout()" class="btn btn-outline-success my-2 my-sm-0" type="submit">Logout</a>
      </form>
    </div>
  </nav>
  
  </template>
  <script>

  export default {
    props:["isActivePage"],
   
  data(){
return{
  isActive: this.isActivePage

}
  },
    methods: {
        logout(){
            localStorage.removeItem("token");
            this.$router.push("/");
        },  change_write() {
      // eslint-disable-next-line vue/no-mutating-props
      this.isActive=false;
      this.$emit("update_active",this.isActive);


    },  change_home() {
      this.isActive=true;
      this.$emit("update_active",this.isActive);

    }
     
        
        
    }

  }

  
  
  
  
  </script>
  <style scoped>
  
  
  .bg-light{
      background-color: #1d1b18 !important;
      box-shadow: 4px 4px 5px 8px rgba(0, 0, 0, 0.25);
  
  }
  .navbar-light .navbar-brand{
      color:  #ffff !important;
      font-weight: 600;
      font-size: 1.3em;
  
  }
  .navbar-light .navbar-nav .active>.nav-link, .navbar-light .navbar-nav .nav-link.active, .navbar-light .navbar-nav .nav-link.show, .navbar-light .navbar-nav .show>.nav-link {
      color: #F4D160 !important;
      font-size: 1em;
      font-weight: 500;
      border-bottom: 1px solid #F4D160  ;
  }
  .btn-outline-success {
      color: #ffff;
      background-color: #1d1b18 !important;
      background-image: none;
      font-size: 1.1em;
      transition: all 0.2s;
      border-color: #ffff !important;
      border: 1px solid #ffff;
  }
  .navbar-light .navbar-nav .nav-link{
      color: #ffff !important;
  }
  .btn-outline-success:hover{
  transform: scale(1.1);
  }
  .navbar-light .navbar-toggler {
      color: #ffff !important;
      border-color: #ffff !important;
  }
  .navbar-toggler-icon{
      color: #ffff !important;
  }
  .navbar-light .navbar-toggler-icon {
  background-image: url(../../public/images/menue.png) !important;
  }
  </style>