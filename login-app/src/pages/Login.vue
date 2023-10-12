<script>
import axios from 'axios';

export default {
  name: "App",
  data() {
    return {
      username: "",
      password: "",
      
    };
  },
  methods: {
    async login() {
      axios.post(`http://localhost:3000/user`,{
          name: this.username,
          password: this.password
      })
    .then(response => {
      if(response.data.length){
        // localStorage.setItem('user', response.data);
        this.$router.replace({ path: "/" , query: response.data[0]});
      }else{
       alert("Vui long nhap tai khoan va mat khau");
      }
    })
    .catch(e => {
      this.errors.push(e)
    })
    },
  },
};
</script>
<template scoped>
  <body>
  <div id="home">
    <div id="login-form">
      <div class="login-form-header">
        <span class="title-header">Đăng nhập</span>
        <span style="position: absolute; top: 19px; right: 19px">✕</span>
      </div>
      <div id="login-body">
        <div class="label-input">Tên đăng nhập</div>
        <input type="text" v-model="username" />
        <div
          style="
            margin-top: 40px;
            display: flex;
            justify-content: space-between;
            width: 462px;
          "
        >
          <span class="label-input">Mật khẩu</span
          ><span
            ><a href="google.com" id="forgot-password">Quên mật khẩu?</a></span
          >
        </div>
        <input type="password" v-model="password"/>
        <div @click="login()" class="login-button">Đăng nhập</div>
        <p class="login-with">hoặc đăng nhập bằng</p>
        <div
          style="
            display: flex;
            justify-content: space-around;
            padding-top: 10px;
          "
        >
          <span class="otherway"
            ><i
              class="fa fa-brands fa-facebook"
              style="font-size: 16px; padding-right: 5px"
            ></i
            ><img src="../img/facebook.png"><span style="position: absolute; left: 70px;">Facebook</span> </span
          >
          <span class="otherway"
            ><i
              class="fa fa-brands fa-google"
              style="font-size: 16px; padding-right: 5px"
            ></i
            ><img src="../img/google.png"><span style="position: absolute; left: 70px;">Google</span></span
          >
        </div>
        <p class="footer">
          Bạn chưa có tài khoản?
          <router-link style="text-decoration:none" to="/register">Đăng ký ngay!</router-link>
        </p>
      </div>
    </div>
  </div>
</body>
</template>

<style scoped>
body {
  background: #f0f2f5;
  display: flex;
  padding: 156px 420px 279px 420px;
  justify-content: center;
  align-items: center;
}
img{
            left: 30px;
            position: absolute;
            height: 20px;
            /* box-shadow: 0px 12px 40px 0px rgba(0, 0, 0, 0.16); */
            /* background: var(--light-greyscale-greyscale-200, #fff); */
            text-align: center;
        }
#login-form {
  width: 600px;
  height: 620px;
  border-radius: 14px;
  background: var(--light-greyscale-greyscale-200, #fff);
  box-shadow: 0px 12px 40px 0px rgba(0, 0, 0, 0.16);
}

.login-form-header {
  position: relative;
  max-height: 58.264px;
  border-bottom: 2px solid var(--light-greyscale-greyscale-300, #E5E6EC);;
  padding: 16px 240px 18.26px 240px;
}

.title-header {
  padding-top: 16px;
  color: var(--light-greyscale-greyscale-900, #000);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 133.333% */
  text-transform: uppercase;
}

#login-body {
  padding: 36.74px 80px 0px 80px;
}

.label-input {
  padding-bottom:10px;
  color: var(--light-greyscale-greyscale-900, #000);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 137.5% */
}

#login-body input {
  display: flex;
  width: 440px;
  height: 22px;
  padding: 16px 15px;
  align-items: flex-start;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #f7f7f7;
  border: 0px;
}

#forgot-password {
  color: var(--dark-other-link-500, #2f80ed);
  text-align: right;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 137.5% */
  text-decoration: none;
}

.login-button {
  margin-top: 40px;
  display: flex;
  width: 440px;
  height: 20px;
  padding: 15px 15px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 40px;
  background: var(--Green, #00bf6f);
  box-shadow: 0px 2px 10px 0px rgba(244, 103, 0, 0.05);

  color: var(--light-text-active, #fff);
  text-align: center;
  /* GG/16px/Med/Button Text */
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.login-with {
  margin-top: 30px;
  color: var(--light-transparent-greyscale-65, rgba(0, 0, 0, 0.65));
  text-align: center;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.192px;
}

.otherway {
  position: relative;
  width:70px;
  flex-shrink: 0;
  border-radius: 24px;
  background: var(--light-greyscale-greyscale-300, #e5e6ec);

  color: var(--light-greyscale-greyscale-900, #000);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
  padding: 13.02px 55px 13px 55px;
}

.footer {
  margin-top: 51px;
  text-align: center;
}
</style>
