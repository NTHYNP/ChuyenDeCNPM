
<script>
export default {
  name: "home",
  data() {
    if (this.$route.query.name) {
     localStorage.setItem('user',JSON.stringify(this.$route.query))
    }
    if (JSON.parse(localStorage.user).login === false) {
      this.$router.replace({ path: "login" });
    }
    return {
        result: JSON.parse(localStorage?.user)
    }
  },
  methods: {
    async logout(){
        localStorage.setItem('user', JSON.stringify({login: false}))
        this.$router.replace({ path: "login" });
    }
  },
};
</script>
<template>
  <div id="home">
    <h1>Xin Chào {{this.result.fullname}}</h1>
    <h3>ID Của Bạn là: {{this.result.id}}</h3>
    <h3>Email Của Bạn là: {{this.result.email}}</h3>

  </div>
  <div>
    <button @click="logout()">Đăng Xuất</button>
  </div>
</template>

<style scoped>
button{
    margin-top: 50px;
    font-size: 20px;
    /* width: 100px; */
}

</style>
