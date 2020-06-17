<template>
 
  <div class="hello">
    <template v-if="dot">
      <div>tt</div>
    </template>
    <h1>{{ msg }} {{test}}</h1>
    <div>
      <h2>get</h2>

      <input type="text" v-model='txtGet' name="input_get" value="get" style="width:100%;" />
      <a href="#" @click="sendGet">전송</a>
    </div>
    <div>
      <h2>post</h2>

      <input type="text" v-model='txtPost' name="input_post" value="post" style="width:100%;" />
      <a href="#" @click="sendPost">전송</a>
    </div>
    <div>
      <h2>put</h2>

      <input type="text" v-model='txtPut' name="input_put" value="put" style="width:100%;" />
      <a href="#" @click="sendPut">전송</a>
    </div>
    <div>
      <h2>delete</h2>

      <input type="text" v-model='txtDelete' name="input_delete" value="delete" style="width:100%;" />
      <a href="#" @click="sendDelete">전송</a>
    </div>
     <div>
      <input type="text" v-model="firstName" /><br/>
      <input type="text" v-model="lastName" /><br/>
      <p>{{fullName}}</p>
     </div>
     <div>
        <Left />
        <Right />
     </div>
     <div>
       <a href="javascript:;" @click="fnAuth">고고</a>
     </div>
  </div>
</template>

<script>
import Left from "./Left";
import Right from "./Right";

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
  ,components:{
    Left
    ,Right
  }
  ,data(){
    return{
      test:'하이'
      ,txtGet:''
      ,txtPost:''
      ,txtPut:''
      ,txtDelete:''
      ,firstName:''
      ,lastName:''
      , dot:false
    }
  }
  ,computed:{
    fullName() {
      return `${this.firstName} ${this.lastName}`
    }
  }
  /*
  ,watch:{
    firstName(val) {
      this.fullName = `${val} ${this.lastName}`;
    }
    ,lastName(val) {
      this.fullName = `${this.firstName} ${val}`;
    }
  }
  */
  ,methods:{
    fnAuth() {
      console.log("fnAuth");
      this.$axios.post("http://localhost:3000/api/data/auth")
      .then((res)=> {
        console.log(res.data);
      })
      .catch((err)=> {
        console.log(err);
      })
    }
    ,sendGet() {
      //this.txtGet='get send';
      this.$axios.get("http://localhost:3000/api/data/company")
      .then((res)=>{
        this.txtGet = JSON.stringify(res.data);
      })
      .catch((err)=>{
        this.txtGet= JSON.stringify(err);
      })
    }
    , sendPost() {
      //this.txtGet='get send';
      this.$axios.post("http://localhost:3000/api/data/company")
      .then((res)=>{
        this.txtPost = JSON.stringify(res.data);
      })
      .catch((err)=>{
        this.txtPost= JSON.stringify(err);
      })
    }
    , sendPut() {
      //this.txtGet='get send';
      this.$axios.put("http://localhost:3000/api/data/company")
      .then((res)=>{
        this.txtPut = JSON.stringify(res.data);
      })
      .catch((err)=>{
        this.txtPut= JSON.stringify(err);
      })
    }
    , sendDelete() {
      this.$axios.delete("http://localhost:3000/api/data/company")
      .then((res)=>{
        this.txtDelete = JSON.stringify(res.data);
      })
      .catch((err)=>{
        this.txtDelete= JSON.stringify(err);
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
