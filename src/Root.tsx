import { ref, onMounted, onBeforeUnmount, defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const isMobileDevice = ref(false);

    const checkDevice = () => {
      if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        isMobileDevice.value = true;
        return <span>移动端</span>;
      } else {
        isMobileDevice.value = false;
        return <span>PC端</span>;
      }
    };

    onMounted(() => {
      window.addEventListener('resize', checkDevice);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('resize', checkDevice);
    });
    const str = ref<string>('tsx的使用');

    return () => checkDevice();
  },
});
