<template>
    <div>
        <input type="text" placeholder="请输入任务名称" v-model="value" @keydown.enter="enter">
    </div>
</template>
<script type="ts">
    import {defineComponent,ref} from 'vue'

    export default defineComponent({
        name: 'navHeader',
        setup(props,ctx) {
            let value = ref('');
            let enter = () =>{
            //回车确认
                console.log(value.value);
                ctx.emit('add',value.value);
                value.value = '';
            };
            return {
                value,
                enter
            }
        }
    });
</script>
<style scoped>
</style>
