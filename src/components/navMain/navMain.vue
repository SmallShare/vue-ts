<template>
    <div v-for="(item,index) in list" :key="index">
        <div id="item">
            <input type="checkbox" v-model="item.complete">
            {{item.title}}
            <button class="del" @click="del(item,index)">删除</button>
        </div>
    </div>
</template>

<script lang="ts">
    import {defineComponent,ref} from 'vue'

    export default defineComponent({
        name: 'navMain',
        setup() {
            let list = ref([
                {
                    title: '吃饭',
                    complete: false
                },
                {
                    title: '睡觉',
                    complete: false
                },
                {
                    title: '敲代码',
                    complete: true
                }
            ]);
            let del = (item:object,index:number) =>{
                console.log(item);
            };
            return {
                list,
                del
            }
        }
    });
</script>
<style scoped>
    #item{
        width: 3rem;
        height: .7rem;
        line-height: .7rem;
        position: relative;
        cursor: pointer;
    }
    #item:hover .del{
        display: block;
    }
    #item:hover{
        background: #dddddd;
    }
    .del{
        position: absolute;
        right: 0;
        top: .12rem;
        z-index: 99;
        display: none;
    }
</style>
