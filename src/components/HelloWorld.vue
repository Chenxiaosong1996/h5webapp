<script setup lang="ts">
  import axios from 'axios';
  import { onMounted, ref, watch } from 'vue';

  defineProps({
    msg: {
      type: String,
      default: '',
    },
    hobby: {
      type: Object,
      default: () => {
        return {
          name: '羽毛球',
        };
      },
    },
  });

  const count = ref(0);

  watch(
    count,
    (newVal, oldVal, clearFn) => {
      // clearFn(() => {
        console.log(newVal, oldVal);
        count.value = 1;
      // });
    },
    {
      // flush: 'pre',
      onTrack: () => {},
      onTrigger: () => {},
      // immediate: true
    },
  );

  const push = () => {
    axios
      .get(
        'https://chenxiaosong1996.top/api/article/list?owner=cc',
        // {
        //   orderId: 'ff3fa912141311eb9762fa163ef5ba8a',
        //   resourceType: 1,
        //   orderResources: [
        //     {
        //       orderId: 'ff3fa912141311eb9762fa163ef5ba8a',
        //       resourceName: '阿里云弹性web托管使用教程',
        //       resourceCode: 'AL114',
        //       resourceType: 1,
        //       resourceSubjectCode: '019',
        //       tag: '阿里云起课程',
        //     },
        //   ],
        //   resourceSubjectCode: '',
        // },
        {
          headers: {
            'Accept-Token': '61e39d8ff7b7ac0f984b895fa42d02a9',
          },
        },
      )
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
</script>

<template>
  <h1>{{ msg }}</h1>
  <h2>
    {{ hobby }}
  </h2>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>
    See
    <code>README.md</code>
    for more information.
  </p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Docs</a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code>
    to test hot module replacement.
  </p>

  <button @click="push">提交代码测试</button>
</template>

<style scoped>
  a {
    color: #42b983;
  }

  label {
    margin: 0 0.5em;
    font-weight: bold;
  }

  code {
    background-color: #eee;
    padding: 2px 4px;
    border-radius: 4px;
    color: #304455;
  }
</style>
