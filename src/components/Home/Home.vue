<template>
  <div>
    <VideoComponent />
    <IntroSection />
    <ProjectDescription/>
    <ContactSection/>
    <CreditsSection />
    <Footer />
  </div>
  
</template>

<script>
import VideoComponent from './VideoComponent.vue';
import IntroSection from './IntroSection.vue';
import ProjectDescription from './ProjectDescription.vue';
import ContactSection from './ContactSection.vue';
import CreditsSection from './CreditsSection.vue';
import Footer from './Footer.vue';
export default {
  name: 'Home',
  components: {
    VideoComponent,
    IntroSection,
    ProjectDescription,
    ContactSection,
    CreditsSection,
    Footer
  }
};
</script>
<style>
</style>