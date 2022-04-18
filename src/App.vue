<template>
  <hello-world :hobby="{value: '123123'}"></hello-world>
</template>

<script lang="ts">
  import HelloWorld from './components/HelloWorld.vue';
  import { ref, onMounted, onBeforeUnmount, defineComponent } from 'vue';

  export default defineComponent({
    components: { HelloWorld },
    setup() {
      const isMobileDevice = ref(false);

      const checkDevice = () => {
        if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
          isMobileDevice.value = true;
          return '移动端';
        } else {
          isMobileDevice.value = false;
          return 'PC端';
        }
      };

      onMounted(() => {
        window.addEventListener('resize', checkDevice);
      });

      onBeforeUnmount(() => {
        window.removeEventListener('resize', checkDevice);
      });
    },
  });
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
