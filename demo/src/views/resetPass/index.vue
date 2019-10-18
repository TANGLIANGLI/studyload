<template>
  <div class="resetPass">
    <div class="box">
      <div class="box-title">
        <p>Reset Password</p>
      </div>

      <div class="box-form">
        <el-form :model="resetpass">
          <el-form-item>
            <el-input
              v-model="resetpass.old"
              placeholder="Original Password"
              type="password"
            />
          </el-form-item>

          <el-form-item>
            <el-input
              v-model="resetpass.new"
              placeholder="New Password"
              type="password"
            />
          </el-form-item>

          <el-form-item>
            <el-input
              v-model="resetpass.confirm"
              placeholder="Confirm New Password"
              type="password"
            />
          </el-form-item>

          <el-button type="primary" @click="submitForm">Confirm</el-button>
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
      resetpass: {
        old: "",
        new: "",
        confirm: ""
      }
    };
  },
  methods: {
    submitForm() {
      //  console.log(this.resetpass);
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
.resetPass {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url("../../assets/background.png");
  background-size: cover;
  .box {
    background: rgba(0, 0, 0, 0.5);
    width: 400px;
    height: 300px;
    border-radius: 10px;
    color: white;
    .box-title {
      border-bottom: 1px dotted white;
      padding: 0px 20px;
      p {
        text-align: center;
      }
    }
    .box-form {
      text-align: left;
      padding: 0px 30px;
    }

    button {
      cursor: pointer;
      width: 100%;
    }
  }
}

/deep/ .el-input__inner {
  background: rgba(0, 0, 0, 0.8);
  color: white;
  border: 0px;
}
/deep/ .el-form-item {
    margin: 15px 0px;
}
</style>
