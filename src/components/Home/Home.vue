<template>
  <div>
    <VideoComponent />
    <IntroSection />
  </div>
  
</template>

<script>
import VideoComponent from './VideoComponent.vue';
import IntroSection from './IntroSection.vue';
export default {
  name: 'Home',
  components: {
    VideoComponent,
    IntroSection
  }
};
</script>
<style>
</style>