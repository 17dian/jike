<template>
  <div>
    <div class="content">
      <div id='monaco' class="box">
         
      </div>
      <v-test class="right"></v-test>
    </div>
  
    <div class="btn" @click="btn">预览</div>
  </div>
</template>
<script>
import VTest from './test.vue'
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js';
import {str} from  './temp.js'
import {get} from './service/base'

export default{
  components:{
    VTest

  },
  data(){
    return{
      
    }
  },
  methods:{
    
  },
  created(){
    
  },
  mounted(){
    
    //读取vue文件
    console.log(str)

    const monacoInstance=monaco.editor.create(document.getElementById("monaco"),{
                value: str,
                language:"javascript"
    })
    //监听修改文件
    this.monacoInstance = monacoInstance;
    //修改触发node修改vue文件
    
  },
  methods:{
    btn(){
      let  a = this.monacoInstance.getValue();
      get('/api',{str:a})
       //node服务器提供一个接口生成vue文件
    }
  }
}
</script>
<style>
    .content{
      width: 100%;
      height: 300px;
    }
    .box{
      float: left;
      width: 48%;
      height: 300px;
    }
    .right{
      float: right;
      width: 48%;
      height: 300px;
      border: 1px solid #666;
    }
    .btn{
      margin-top: 50px;
      text-align: center;
      
    }
</style>