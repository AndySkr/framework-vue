<template>
  <div>hello {{age}}</div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
@Component({
  name: "Hello"
})
export default class Hello extends Vue {
  age: number = 12;
  mounted() {
    console.log("HelloComponent", this.age);
  }
}
</script>
<style lang="less">
div {
  background: lightblue;
}
</style>
