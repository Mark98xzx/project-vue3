<template>
  <div class="home-header">
    <img src="@/assets/logo.png">

    <!-- vue2 v-model = input事件 + value -->
    <!-- vue3 v-model = modelValue  update:modelValue -->
    <van-dropdown-menu>
      <van-dropdown-item
        :modelValue="category"
        :options="options"
        @change="handleChange" />
        
    </van-dropdown-menu>
  </div>
</template>

<script lang="ts">
import { CATOGRORY_TYPES } from '@/typings/home'
import { defineComponent, PropType, reactive, toRefs } from 'vue'

export default defineComponent({
  props: {
    category: {
      type: Number as PropType<CATOGRORY_TYPES>
    }
  },
  emits: ['setCurrentCategory'], // 提示作用 事件回传
  setup(props, context) {
    // props.category
    // context.emit("setCurrentCategory")
    let state = reactive({
      options: [
        { text: "全部课程", value: CATOGRORY_TYPES.ALL },
        { text: "react课程", value: CATOGRORY_TYPES.REACT },
        { text: "vue课程", value: CATOGRORY_TYPES.VUE },
        { text: "mode课程", value: CATOGRORY_TYPES.NODE },
      ]
    });

    function handleChange(value: CATOGRORY_TYPES) {
      context.emit("setCurrentCategory", value)

    }

    return {
      ...toRefs(state),
      handleChange
    }
  },
})
</script>


<style lang="scss">
.home-header {
  height: 65px;
  background: #2a2a2a;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3%;
  position: fixed;
  top: 0;
  left: 0;
  width: 94%;
  img {
    height: 40px;
  }
  .van-dropdown-menu__bar {
    background: #2a2a2a;
  }
  .van-dropdown-menu__title {
    color: #fff;
  }
}
</style>