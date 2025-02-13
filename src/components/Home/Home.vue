<template>
  <div>
    <VideoComponent />
    <IntroSection />
    <ProjectDescription/>
  </div>
  
</template>

<script>
import VideoComponent from './VideoComponent.vue';
import IntroSection from './IntroSection.vue';
import ProjectDescription from './ProjectDescription.vue';
export default {
  name: 'Home',
  components: {
    VideoComponent,
    IntroSection,
    ProjectDescription
  }
};
</script>
<style>
</style>