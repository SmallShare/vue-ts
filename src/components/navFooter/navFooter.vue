<template>
    <div class="container">
        <div>已完成{{isComplete}} / 全部{{list.length}}</div>
        <div v-if="isComplete > 0">
            <button class="btn" @click="clear">清除已完成</button>
        </div>
    </div>
</template>

<script lang="ts">
    import {defineComponent,ref,computed} from 'vue'
    export default defineComponent({
        name: 'navFooter',
        props:{
            list: {
                type: Array,
                require: true
            }
        },
        setup(props,ctx) {
          // let isComplete = ref(0)
            let isComplete = computed(() =>{
                let arr = (props.list as any).filter(item =>{
                    return item.complete
                })
                return arr.length
            })

            let clear = () =>{
                console.log('clear');
                let arr = (props.list as any).filter(item =>{
                    return !item.complete
                })
                ctx.emit('clear',arr);
            }
            return {
                isComplete,
                clear
            }
        }
    });
</script>
<style scoped>
    .container{
        display: flex;
        align-items: center;
    }
    .btn{
        margin-left: .2rem;
    }
</style>
