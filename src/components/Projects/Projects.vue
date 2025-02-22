<template>
  <div class="ps-main">
    <div v-for="project in projectData" :key="project.id">
      <Project 
      :projectTitle="project.projectTitle"
      :videoText="project.videoText"
      :audioText="project.audioText"
      :imageSrc="project.imageSrc"
      :thumbSrc="project.thumbSrc"
      :id="project.id"
      :type="project.type"
      />
    </div>
  </div>
  <Footer />
</template>

<script>
import Project from './Project.vue';
import { projectInfo }from '@/data/textos';
import Footer from '../Home/Footer.vue';

export default {
  name: 'Projects',
  components: { Project, Footer },
  data() {
    return {
      projectData: projectInfo
    };
  }
};
</script>
