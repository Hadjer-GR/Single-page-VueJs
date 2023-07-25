<!-- eslint-disable vue/multi-word-component-names -->

<template>
<section class="vh-100">
  <div class="container-fluid h-custom">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-9 col-lg-6 col-xl-5">
        <img src="../../public/images/back4.png"
          class="img-fluid" alt="Sample image">
      </div>
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form @submit.prevent="sign_up()">
          <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
            <p class="lead fw-normal mb-0 me-3" style="text-align: center;font-size:1.2em !important; font-weight: 600;">Sign up</p>
           
          </div>

          <div class="divider d-flex align-items-center my-4">
            <!-- <p class="text-center fw-bold mx-3 mb-0">Or</p> -->
          </div>
      <!-- User Name  input -->
         <div class="form-outline mb-4">
            <label class="form-label" for="form3Example2">First Name </label>
            <input type="text" id="form3Example2" class="form-control form-control-lg"
              placeholder="Enter your name" v-model.lazy="first_name"  required/>
          </div>

          <!-- Email input -->
          <div class="form-outline mb-4">
            <label class="form-label" for="form3Example3">Email address</label>
            <input type="email" id="form3Example3" class="form-control form-control-lg"
              placeholder="Enter a valid email address" v-model.lazy.trim="email" required/>
          </div>

          <!-- Password input -->
          <div class="form-outline mb-4">
            <label class="form-label" for="form3Example4">Password</label>

            <input type="password" id="form3Example4" class="form-control form-control-lg"
              placeholder="Enter password" v-model.lazy.trim="password" required />
          </div>

      
          <!-- Reapte  Password input -->
          <div class="form-outline mb-3">
            <label class="form-label" for="form3Example5">Reapt  Password</label>

            <input type="password" id="form3Example5" class="form-control form-control-lg"
              placeholder="Reapt your password"  v-model.lazy.trim="password_confirmation" required />
          </div>
          <p class="link-danger" style="color: red !important;" >{{ error }}</p>

      
          <div class="text-center text-lg-start mt-4 pt-2">
            <button type="submit" class="btn btn-primary btn-lg"
              style="padding-left: 2.5rem; padding-right: 2.5rem;">Register</button>
            <p class="small fw-bold mt-2 pt-1 mb-0">Do you have an account? <router-link to="/"
                class="link-danger">Login in</router-link></p>
          </div>

        </form>
      </div>
     
    </div>
    </div>
    </section>

</template>
<script>
import axios from "axios";

export default {
  props:["username"],
  data(){
    return{
    first_name:"",
    email:"",
    password:"",
    password_confirmation:"",
    error:""
    }
   
  },methods: {
   async sign_up(){
     
      const user = { 
          name:   this.first_name,
          email: this.email,
          password:this.password,
          password_confirmation:this.password_confirmation
        };
      axios.post('register',user).then((resp) => { 
      this.error="";
      localStorage.setItem("token",resp.data.token);
      this.$router.push("/news");
    }).catch((err) => {
    //console.log(err.response.data.message)
    this.error=err.response.data.message;
   })
         

    }
  },
    
}
</script>









<style scoped>
.container-fluid {
  margin-top: 5% !important;
}
.btn-lg{
    background-color:#F4C04A !important;
    border: none !important;
    transition: all 0.2s;
  }
  .btn-lg:hover{
    transform: scale(1.1);
  }
  #form2Example3:checked{
    background-color: rgba(254, 186, 0, 0.633) !important;
    border: none !important;
  
  }
  .divider:after,
  .divider:before {
  content: "";
  flex: 1;
  height: 1px;
  background: #eee;
  }
  .h-custom {
  height: calc(100% - 73px);
  }
  @media (max-width: 450px) {
  .h-custom {
  height: 100%;
  }
  }
</style>