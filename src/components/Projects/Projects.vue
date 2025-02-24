<template>
  <div class="ps-main" :key="$route.query.id">
    <div 
      v-for="project in projectData" 
      :key="project.id" 
      :id="`project-${project.id}`"
    >
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
    <Footer />
  </div>
</template>

<script>
import Project from './Project.vue';
import { projectInfo } from '@/data/textos';
import Footer from '../Home/Footer.vue';

export default {
  name: 'Projects',
  components: { Project, Footer },
  data() {
    return {
      projectData: projectInfo
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.scrollToProject();
    });
  },
  watch: {
    '$route.query.id': function(newId) {
      this.scrollToProject();
    }
  },
  methods: {
    scrollToProject() {
      const projectId = this.$route.query.id;
      if (projectId) {
        const elementId = `project-${projectId}`;
        const element = document.getElementById(elementId);
        
        if (element) {
          setTimeout(() => {
            element.scrollIntoView();
          }, 10);
        }
      }
    }
  }
};
</script>