<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
@Component({
    name: 'App'
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
