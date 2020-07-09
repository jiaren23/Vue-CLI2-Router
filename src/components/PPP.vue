<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{http}}}</h2>
  </div>
</template>


<script>
export default {
  name: 'PPP',
  data () {
    return {
      msg: '安安你好我是 ppp',  // 透過 dev.env 的環境變數來驅動更改
      http: process.env.HTTP_PATH
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
