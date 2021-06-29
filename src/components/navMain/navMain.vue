<template>
    <div>
      <div v-if="list.length === 0">暂无任务</div>
      <div v-else v-for="(item,index) in list" :key="index">
        <div id="item">
          <input type="checkbox" v-model="item.complete">
          {{item.title}}
          <button class="del" @click="del(item,index)">删除</button>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
    import {defineComponent,ref,computed} from 'vue'

    export default defineComponent({
        name: 'navMain',
        props:{
            list: {
                type: Array,
                require: true
            }
        },
        emits: ['del'],
        setup(props,ctx) {
            let del = (item:object,index:number) =>{
                ctx.emit('del',index);
                console.log(item);
            };
            return {
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
