<template>
    <div>hello</div>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
@Component({
    name: 'Hello'
})
export default class Hello extends Vue {
    private age: number = 12;
    mounted() {}
}
</script>
<style lang="less" scoped module>
div {
    background: lightblue;
}
</style>
