<template>
  <div class="ps-main">
    <div v-for="project in projectData" :key="project.id">
      <Project 
        :key="project.id" 
        ref="projectComponents"
        :projectTitle="project.projectTitle" 
        :videoText="project.videoText" 
        :audioText="project.audioText"
        :imageSrc="project.imageSrc" 
        :thumbSrc="project.thumbSrc" 
        :id="project.id" 
        :type="project.type" 
        :texts="project.texts"
      />
    </div>
    <Footer />
  </div>
</template>

<script>
import Project from './Project.vue';
import { projectInfo } from '@/data/textos';
import Footer from '../Home/Footer.vue';
import { nextTick } from 'vue';

export default {
  name: 'Projects',
  components: { Project, Footer },
  data() {
    return {
      projectData: projectInfo
    };
  },
  mounted() {
    this.scrollToProject();
  },
  watch: {
    '$route.query.id': 'scrollToProject'
  },
  methods: {
    scrollToProject() {
      const projectId = this.$route.query.id;
      if (projectId) {
        nextTick(() => {
          setTimeout(() => {
            const projectRef = this.$refs.projectComponents.find((project) => project.id === parseInt(projectId));
            if (projectRef) {
              projectRef.scrollToTop();
            }
          }, 20); 
        });
      }
    }
  }
};
</script>
