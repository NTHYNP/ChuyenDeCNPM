<script>
    import axios from 'axios';

    export default {
        name: "App",
        data() {
            return {
                fullname: "",
                name: "",
                password: "",
                repeatPass: "",
                email: ""
            }
        },
        methods: {
            async register() {
                if (this.password === this.repeatPass) {
                    axios.post(`http://localhost:3000/resgister`,{
                        fullname: this.fullname,
                        name: this.name,
                         password: this.password,
                         email: this.email
                    })
                  .then(response => {
                     if(response.data.status === 200){
                        alert("Đăng kí thành công")
                        this.$router.replace({ path: "/login"});
                  }else{
                    alert(response.data.message);
                 }
                 })
             .catch(e => {
               this.errors.push(e)
                 })
                }else{
                    alert("Nhập lại mật khẩu không đúng")
                }
            }
        }
    };
</script>

<template scoped>
    <body>
    <div id="home">
        <div id="login-form">
            <div class="login-container">
                <h3>Đăng ký tài khoản mới miễn phí</h3>
                <div class="login-form">
                    <div class="input">
                        <label for="">Họ và tên</label>
                        <input class="data-input" type="text" v-model="fullname" placeholder="Nhập họ và tên của bạn"/>

                        <label for="">Tên đăng nhập</label>
                        <input class="data-input" type="text" v-model="name" placeholder="Nhập tên đăng nhạp của bạn"/>

                        <label for="">Mật khẩu</label>
                        <input class="data-input" type="password" v-model="password" placeholder="Nhập họ và tên của bạn"/>

                        <label for="">Nhập lại mật khẩu</label>
                        <input class="data-input" type="password" v-model="repeatPass" placeholder="Nhập họ và tên của bạn"/>

                        <label for="">Email</label>
                        <input class="data-input" type="email" v-model="email" placeholder="Nhập họ và tên của bạn"/>

                        <input type="checkbox" name="" id=""/>
                        <span style="color: var(--main--text, #002352);">Tôi đồng ý với các <a href="#"
                                style="color: var(--Link, #1890ff);">điều kiện và điều khoản</a></span>


                         <div @click="register()" class="login-button">Đăng ký</div>
                            <div style="text-align: center; margin-bottom: 10px;">hoặc</div>

                         <div class="icon">
                            <a href="#"><img src="../img/img1.png" alt=""></a>
                            <a href="#"><img src="../img/img2.png" alt=""></a>
                            <a href="#"><img src="../img/img3.png" alt=""></a>
                         </div>
                         <div class="footer">
                            <span>Bạn đã có tài khoản rồi? <a href="#"><router-link to="/login">Đăng nhập</router-link> </a></span>
                         </div>

                    </div>
                    
                    
                </div>
            </div>
        </div>
    </div>
</body>
</template>





<style scoped>
  body {
            background: #f0f2f5;
            display: flex;
            /* width: 1440px; */
            padding: 50px 420px 279px 420px;
            justify-content: center;
            align-items: center;
        }

        #login-form {
            display: block;
            width: 500px;
            height: 800px;
            border-radius: 14px;
            background: var(--light-greyscale-greyscale-200, #fff);
            box-shadow: 0px 12px 40px 0px rgba(0, 0, 0, 0.16);
            /* position: relative; */
        }

        .login-container {
            /* border: #000 solid 1px; */
            width: 95%;
            height: 95%;
            padding: 10px;
        }

        .login-form {
            display: block;
            width: 100%;
            height: 90%;
            position: relative;

        }

        h3 {
            color: var(--main--text, #002352);
            text-align: center;
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            font-weight: 700;
            line-height: 130%;
        }

        .input {
            display: block;
            /* width: 400px;
            height: 20px; */
            /* padding: 16px 15px; */
            margin: auto;
            position: absolute;
            left: 50%;
            transform: translate(-50%, 0%);
        }

        label {
            display: block;
            padding-bottom: 5px;
            color: var(--light-greyscale-greyscale-900);
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            font-size: 15px;
            font-weight: 500;
            line-height: 22px;
        }

        .data-input {
            display: flex;
            border: #F7F7F7;
            width: 400px;
            height: 18px;
            padding: 16px 15px;
            margin-bottom: 20px;
            align-items: flex-start;
            gap: 10px;
            flex-shrink: 0;
            border-radius: 8px;
            background: #F7F7F7;
            color: var(--light-greyscale-greyscale-900);
        }

        span,
        a {
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            font-size: 14px;
            font-weight: 400;
        }

        .login-button {
            margin: 30px auto 10px auto;
            display: flex;
            width: 35%;
            height: 12px;
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
            font-family: Roboto;
            font-size: 18px;
        }
        .login-button:hover{
            background: #E5E6Ec;
            color: var(--light-text-active, rgb(85, 83, 83));
        }
        .icon{
            text-align: center;
        }
        .icon a{
            margin: 5px;
        }
        img{
            padding: 5px;
            width: 30px;
            height: 30px;
            box-shadow: 0px 12px 40px 0px rgba(0, 0, 0, 0.16);
            border-radius: 50%;
            background: var(--light-greyscale-greyscale-200, #fff);
            text-align: center;
        }
        .footer{
            margin-top: 10px;
            color:  var(--main--text, #002352);
            text-align: center;
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            font-weight: 400;
        }
        .footer a{
            color: calc(--Link, #1890ff);
            font-style: normal;
            text-decoration: none;
        }
</style>
