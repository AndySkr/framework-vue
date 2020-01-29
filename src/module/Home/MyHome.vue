<template>
  <div class="wrap">
    <h1>hi</h1>
    <h2>{{ mes }}</h2>
    <h2>{{ info }}</h2>
  </div>
</template>
<script>
export default {
  name: "MyHome",
  data() {
    return {
      mes: 3,
      info: 3
    };
  },
  mounted() {
    var promise = new Promise(function(resolve, reject) {
      const value = "success";
      const error = "fail";
      resolve(() => {
        console.log(value);
      });
      reject(() => {
        console.log(error);
      });
    });
  }
};
</script>
<style scoped lang="less" module>
.wrap {
  width: 100%;
  height: 100vh;
  background: url("../../assets/images/bg.jpg") no-repeat center center;
  background-size: cover;

  h1,
  h2 {
    background: yellow;
    width: 120px;
  }
}
</style>
