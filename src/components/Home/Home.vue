<template>
  <div>
    <VideoComponent />
    <IntroSection />
    <ProjectDescription/>
    <ContactSection/>
    <CreditsSection />
  </div>
  
</template>

<script>
import VideoComponent from './VideoComponent.vue';
import IntroSection from './IntroSection.vue';
import ProjectDescription from './ProjectDescription.vue';
import ContactSection from './ContactSection.vue';
import CreditsSection from './CreditsSection.vue';
export default {
  name: 'Home',
  components: {
    VideoComponent,
    IntroSection,
    ProjectDescription,
    ContactSection,
    CreditsSection
  }
};
</script>
<style>
</style>