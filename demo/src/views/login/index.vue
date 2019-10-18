<template>
  <div class="login">
    <div class="box">
      <div class="box-title">
        <p>Welcome to OTR+DWH DataHub</p>
        <p style="font-size:14px;">Please login to your account.</p>
      </div>

      <div class="box-form">
        <el-form :model="loginForm">
          <el-form-item>
            <el-input
              v-model="loginForm.name"
              placeholder="Username"
              type="text"
              prefix-icon="el-icon-user"
            />
          </el-form-item>

          <el-form-item>
            <el-input
              class="password"
              v-model="loginForm.password"
              :type="passwordType"
              placeholder="Password"
              prefix-icon="el-icon-lock"
            >
            </el-input>
            <span id="eye" @click="changeEye">
              <img v-if="closed" src="../../icon/svg/eye.svg"/>
              <img v-else src="../../icon/svg/eye (2).svg" alt=""
            /></span>
          </el-form-item>

          <div class="tips">
            <el-checkbox v-model="checked">Remember me</el-checkbox>
            <span id="reset"><a href="">Reset Password</a></span>
          </div>

          <el-button type="primary" @click="submitForm">Login</el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      loginForm: {
        name: "",
        password: ""
      },
      checked: false,
      closed: true,
      passwordType: "password"
    };
  },
  methods: {
    submitForm() {
      //  console.log(this.loginForm);
    },
    changeEye() {
      this.closed = !this.closed;
      if (this.closed == true) {
        this.passwordType = "password";
      } else {
        this.passwordType = "text";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url("../../assets/background.png");
  background-size: cover;
  span,
  a {
    color: gray;
    text-decoration: none;
  }
  .box {
    background: rgba(0, 0, 0, 0.5);
    width: 350px;
    height: 300px;
    border-radius: 10px;
    padding: 0px 25px;
    p:nth-child(1) {
      text-align: left;
      color: white;
    }
    p:nth-child(2) {
      text-align: left;
      color: gray;
    }
    .box-form {
      padding: 0px 10px;
      border-top: 1px solid gray;
      .password {
        display: inline-block !important;
      }
      #eye {
        position: absolute;
        top: 5px;
        right: 10px;
      }
    }
    .tips {
      font-size: 10px;
      .el-checkbox {
        float: left;
      }
      #reset {
        float: right;
      }
      ::after {
        content: "";
        display: block;
        height: 0;
        clear: both;
        visibility: hidden;
      }
    }
  }
}
/deep/.el-form-item {
  margin: 15px 0px;
}

/deep/ .el-button {
  margin-top: 15px;
  cursor: pointer;
  width: 100%;
}
/deep/ .el-checkbox {
  display: inline;
}
/deep/ .el-checkbox__original {
  width: 10px;
  height: 10px;
  margin: 0px;
}
/deep/ .el-checkbox__label {
  font-size: 10px;
}
/deep/ .el-input__inner{
      background: rgba(0, 0, 0, 0.8);
      color:white;
      border: 0px;
  }
</style>
