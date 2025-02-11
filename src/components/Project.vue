<template>
  <div class="p-main">
    <p>{{ projectTitle }}</p>
  </div>
</template>

<script>
export default {
  name: 'Project',
  props: {
    projectTitle: String,
    videoText: String,
    audioText: String,
    imageSrc: String
  }
};
</script>
