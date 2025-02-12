<template>
  <div class="ps-main">
    <div v-for="project in projectData" :key="project.id">
      <Project 
      :projectTitle="project.projectTitle"
      :videoText="project.videoText"
      :audioText="project.audioText"
      :imageSrc="project.imageSrc"
      :thumbSrc="project.thumbSrc"
      />
    </div>
  </div>
</template>

<script>
import Project from './Project.vue';
import projectInfo from '@/data/textos';

export default {
  name: 'Projects',
  components: { Project },
  data() {
    return {
      projectData: projectInfo
    };
  }
};
</script>
