<template>
   <div>
       <input type="text" v-model="inputVal" >
        <button @click='handleChange'>转换</button>
        <p  >64进制：{{nums}}</p>
   </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
       name:"3232",
       inputVal:"",
       nums:""
    }
  },
  methods:{

    handleChange(e){
       //先将输入转化为十进制数 100.100 --->s 100.1
       let arr =  Number(this.inputVal).toString().split('.')
       if(arr.length !==2) {
         alert('请输入争取十进制浮点数：例如10.01')
       }
      //分别取出整数和小数，然后将10进制转化成64进制
      let a = this.conversion(arr[0]);
      let b = this.conversion(arr[1]);
      this.nums =  a+'.'+b
    },
    //
    conversion(inputVal){
      const SIGNS =
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-+".split("");
         let result = [];
          let div = inputVal;
          while (div > 63) {
            result.push(SIGNS[div % 64]);
            div = Math.floor(div / 64);
          }
          result.push(SIGNS[div]);
          return  result.reverse().join("");
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
