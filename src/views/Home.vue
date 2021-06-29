<template>
    <nav-header @add="add"></nav-header>
    <nav-main :list="list" @del="del"></nav-main>
    <nav-footer :list="list" @clear="clear"></nav-footer>
    <!--<div @click="clickName('jack')">{{name}}</div>-->
    <!--<div>和{{addNum}}</div>-->
    <!--<div @click="clickName2">{{name2}}</div>-->
    <!--<div>{{list}}</div>-->
    <!--<button @click="gotoPage">跳转路由</button>-->
</template>

<script lang="ts">
    import navHeader from "@/components/navHeader/navHeader.vue"
    import navFooter from "@/components/navFooter/navFooter.vue"
    import navMain from "@/components/navMain/navMain.vue"
    import {defineComponent,ref,reactive,toRefs,computed,onMounted} from 'vue'
    import {useStore} from 'vuex'
    import {useRouter,useRoute} from 'vue-router'
    export default defineComponent({
        name: 'Home',
        props: {},
        components: {
            navHeader,
            navMain,
            navFooter
        },
        setup(props,ctx) {
            const router = useRouter();
            const route = useRoute();
            console.log('router',useRouter());
            let store = useStore();
            let list = computed(()=>{
                return store.state.list
            });
            console.log('store',store);
            let add = (val:any) => {
                // 先判断有没有存在的任务，没有再添加
                console.log('11',list);
                let flag = true;
                list.value.map(item=>{
                    if(val === item.title){
                        flag = false;
                        alert('任务已存在');
                    }
                })
                // for(let item in list){
                //     if((val as any) == (item as any)['title']){
                //         alert('任务已存在');
                //         return;
                //     }
                // }
                if(flag){
                    store.commit('addTodo',{
                        title: val,
                        complete: false
                    });
                }
            };
            let num = ref(10);
            let name = ref('jack');
            let data = reactive({
                name2: 'mary',
                age: 12,
                sex: 'girl',
                obj: {
                    price: 20
                },
                arr: [1,'e']
            });
            onMounted(()=>{
                console.log('onMounted')
            });
            console.log('setup');
            let clickName = (value:string) => {
                console.log(value)
            };
            let clickName2 = () => {
                console.log(data.name2)
            };
            let addNum = computed(()=>{
                //必须返回一个值
                return data.obj.price + data.age
            });
            let gotoPage = () =>{
                router.push({path: '/about'})
            };
            let del = (val) =>{
                store.commit('delTodo',val);
            }
            let clear = (val) =>{
                store.commit('clear',val);
            }
            return {
                //练习测试数据
                // num,
                name,
                data,
                ...toRefs(data),
                clickName,
                clickName2,
                addNum,
                gotoPage,
                // toDolist数据
                list,
                add,
                del,
                clear
            }
        }
    })

</script>
<style scoped>

</style>
