<template>
  <div class="page">
    <div class="data">
      <div class="management">
        <p class="title">Data Source Management</p>
        <div class="manage_main">
          <div class="left">
            <el-form :model="form1">
              <el-input
                v-model="form1.dbtype"
                placeholder="Database Type"
              ></el-input>
              <el-input v-model="form1.id" placeholder="ID"></el-input>
              <el-input v-model="form1.port" placeholder="Port"></el-input>
              <el-button type="primary">Search</el-button>
            </el-form>
          </div>
          <div class="right">
            <el-form :model="form2">
              <el-input v-model="form2.name" placeholder="Name"></el-input>
              <el-input
                v-model="form2.password"
                placeholder="Password"
              ></el-input>
              <el-input placeholder="Port" style="visibility:hidden"></el-input>
              <el-button type="primary">Submit</el-button>
            </el-form>
          </div>
        </div>
      </div>
      <div class="log">
        <p class="title">Data Source Log</p>
        <div class="logtable">
          <el-table :data="tableData">
            <el-table-column width="120" prop="dbtype" label="Database Type" align="center">
            </el-table-column>
            <el-table-column prop="id" label="ID" align="center">
            </el-table-column>
            <el-table-column prop="port" label="Port" align="center">
            </el-table-column>
            <el-table-column prop="name" label="Name" align="center">
            </el-table-column>
            <el-table-column prop="password" label="Password" align="center">
            </el-table-column>
            <el-table-column label="ACtion" align="center">
              <template slot-scope="scope">
                <a >Edit</a>
                <a @click="delte(scope.$index,scope.row)">Delete</a>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
    <div class="template">
      <div class="management">
        <p class="title">Template management</p>
        <div class="tempMain">
          <div class="tempInput">
            <div class="left">
              <el-form :model="form3">
                <el-input v-model="form3.name" placeholder="Name"></el-input>
                <el-input
                  v-model="form3.des"
                  placeholder="Description"
                ></el-input>
                <el-input
                  v-model="form3.ds"
                  placeholder="Data Source"
                ></el-input>
                <el-button type="primary">Search</el-button>
              </el-form>
            </div>
            <div class="right">
              <el-form :model="form4">
                <el-input
                  type="textarea"
                  :rows="5"
                  v-model="form4.temp"
                  placeholder="Template"
                ></el-input>
                <el-button type="primary">Submit</el-button>
              </el-form>
            </div>
          </div>
        </div>
      </div>
      <div class="log">
        <p class="title">Temlate Log</p>
        <div class="logtable">
          <el-table :data="tableData2">
            <el-table-column prop="name" label="Name" align="center">
            </el-table-column>
            <el-table-column prop="des" label="Des" align="center">
            </el-table-column>
            <el-table-column label="Template" align="center">
              <template slot-scope="scope">
                <a href="">{{ scope.row.template }}</a>
              </template>
            </el-table-column>
            <el-table-column
              prop="datasourse"
              label="DataSourse"
              align="center"
            >
            </el-table-column>
            <el-table-column label="ACtion" align="center">
              <template slot-scope="scope">
                <a href="">Edit</a>
                <a @click="delte2(scope.$index,scope.row)">Delete</a>
              </template>
            </el-table-column>
          </el-table>
        </div>
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
      form1: {
        dytype: "",
        name: "",
        id: ""
      },
      form2: {
        name: "",
        password: ""
      },
      form3: {
        name: "",
        des: "",
        ds: ""
      },
      form4: {
        temp: ""
      },
      tableData: [
        {
          dbtype: "Sql Sever",
          id: "003",
          port: "8081",
          name: "Sig",
          password: "666"
        },
        {
          dbtype: "Oracle",
          id: "009",
          port: "8082",
          name: "Laa",
          password: "111"
        },
        {
          dbtype: "Hive",
          id: "123",
          port: "8083",
          name: "Sene",
          password: "333"
        }
      ],
      tableData2: [
        {
          name: "***",
          des: "***",
          template: "***",
          datasourse: "***"
        },
        {
          name: "***",
          des: "***",
          template: "***",
          datasourse: "***"
        },
        {
          name: "***",
          des: "***",
          template: "***",
          datasourse: "***"
        }
      ]
    };
  },
  methods: {
      delte(index,obj){
          this.$confirm('此操作将永久删除'+obj.id+', 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            this.tableData.splice(index,1);
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });

      },
      delte2(index,obj){
          this.$confirm('此操作将永久删除'+obj.name+', 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            this.tableData2.splice(index,1);
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });

      }
  }
};
</script>

<style lang="scss" scoped>
$back-color: #454545;
$blue-color: #404854;
$border-color: #585858;
$link-color: #0070c0;
$font-color: #9d9d9d;

.page {
  padding: 50px;
  .data,
  .template {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    //padding:
    .management,
    .log {
      margin: 5px;
      height: 260px;
      width: 50%;
      background: $back-color;
    }
    .manage_main {
      display: flex;
      justify-content: flex-start;
      margin: 0px 10%;
      .left {
        width: 50%;
      }
      .right {
        margin-left: 40px;
        width: 50%;
      }
    }
    .tempMain {
      .tempInput {
        display: flex;
        justify-content: flex-start;
        margin: 0px 10%;
        .left {
          width: 50%;
        }
        .right {
          margin-left: 40px;
          width: 50%;
          /deep/ .el-input__inner {
            height: 125px !important;
          }
        }
      }
    }
    .logtable {
      padding: 10px;
    }
    p.title {
      text-align: left;
      margin-left: 10%;
      font-weight: bold;
      color: white;
    }
  }
}
/deep/ .el-table {
  font-size: 10px;
  border: 1px solid #585858;
  border-bottom: 0px;
  tr,
  th {
    background: $back-color;
  }
  .el-table__header th {
    background: $blue-color;
    color: white;
    border: 0px;
    padding: 8px 0px;
  }
  .el-table__row td {
    font-weight: bold;
    color: $font-color;
    border-color: #585858;
    padding: 8px 0px;
    a {
      color: $link-color;
    }
  }
}
/deep/.el-table::before {
  z-index: 0;
}
/deep/ .el-input {
  margin: 5px 0px;
  .el-input__inner {
    background: $blue-color;
    border: 0px;
    border-radius: 0px !important;
    height: 35px !important;
    color: $font-color;
  }
}
/deep/ .el-button {
  margin-top: 20px;
  border-radius: 0px;
  height: 35px;
  width: 100%;
}
/deep/ .el-textarea textarea {
  margin: 5px 0px;
  background: $blue-color;
  border: 0px;
  border-radius: 0px !important;
  height: 125px !important;
  color: $font-color;
}
/deep/ .el-table__row td:last-child .cell {
    padding:0px 0px;
    a{
        cursor: pointer;
        margin: 0px 5px;
        text-decoration: underline;
    }
} 
</style>
