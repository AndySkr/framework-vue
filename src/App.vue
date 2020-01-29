<template>
  <div>
    <Hello />
    <div>1213121</div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Hello from "./components/Hello.vue";
@Component({
  name: "App",
  components: {
    Hello
  }
})
export default class App extends Vue {
  appNum: number = 999;
  mounted() {
    this.logNum();
  }
  logNum() {
    console.log(this.appNum);
  }
}
</script>

<style lang="less" scoped></style>
