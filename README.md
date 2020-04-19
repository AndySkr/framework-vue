#### vue 脚手架

    打包命令:
        npm run build --mode=dev
        npm run build --mode=prod

    1.vue + vue-router + typescript + webpack 搭建的简单版移动端脚手架
    2.采用了基于类的组件的编码方式,借助 vue-class-component 插件提供的装饰器
            import Vue from 'vue'
            import Component from 'vue-class-component'

            // @Component 修饰符注明了此类为一个 Vue 组件
            @Component({
            // 所有的组件选项都可以放在这里
                name: "MyComponent",
                components: {
                    xxx // 子组件在这里注入
                }
            })

            export default class MyComponent extends Vue {
                // 初始数据可以直接声明为实例的属性
                message: string = 'Hello!'

                // 组件的各种生命周期, 可直接声明为实例的方法
                mounted(){
                    console.log("mounted")
                }

                // 组件方法也可以直接声明为实例的方法
                onClick (): void {
                    window.alert(this.message)
                }
            }

    3. 对于状态管理,vuex
    4. 数据请求axios,有二次的封装
