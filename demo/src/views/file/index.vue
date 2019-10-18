<template>
  <div class="file">
    <div class="box">
      <div class="box-title">
        <p>OTR+DWH Shared Encryptef File</p>
        <p style="font-size:14px;">***.csv</p>
      </div>

      <div class="box-form">
          <p>Please Input the Extract Code</p>
        <el-form :model="fileFrom">
          <el-form-item>
            <el-input
              v-model="fileFrom.code"
              placeholder="****"
              type="text"
            />
          </el-form-item>
         

          <el-button type="primary" @click="submitForm"
            >Download</el-button
          >
          
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
      fileFrom: {
        code: ""
      }
    };
  },
  methods: {
    submitForm() {
    //  console.log(this.fileFrom);
    },
    changeEye(){
        this.closed=!this.closed;
        if(this.closed==true){
            this.passwordType='password';
        }else{
            this.passwordType='text';
        }

    }
  }
};
</script>


<style lang="scss" scoped>
.file {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
background: url('../../assets/background.png');
background-size: cover;
.box {
  width: 400px;
  height: 300px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  color: gray;
  .box-title{
    border-bottom: 1px dotted white;
    padding: 0px 20px;
    p{
        text-align: left;
    }
    P:nth-child(1){
    color:white;
}
}
.box-form{
    text-align: left;
    padding: 0px 20px;
    p{
         margin: 0px;
    margin-top: 25px;
    font-size: 14px;
    }
}
button {
  cursor: pointer;
  width: 100%;
}

}

}

/deep/.el-input{
  margin: 15px 0px;
  .el-input__inner{
      text-align: center;
      background: rgba(0, 0, 0, 0.8);
      color:white;
      border: 0px;
      font-size: 16px;
  }

}


</style>
