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
      projectData: projectInfo,
      projectId: null 
    };
  },
  mounted() {
    this.handleQueryParams(); 
  },
  watch: {
    '$route.query.id': 'handleQueryParams'
  },
  methods: {
    handleQueryParams() {
      const id = this.$route.query.id;
      if (id) {
        this.projectId = id;
        this.scrollToProject(id);
      }
    },
    scrollToProject(id) {
      nextTick(() => {
        setTimeout(() => {
          const projectRef = this.$refs.projectComponents.find((project) => project.id === parseInt(id));
          if (projectRef) {
            projectRef.scrollToTop({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }, 30); 
      });
    }
  }
};
</script>
