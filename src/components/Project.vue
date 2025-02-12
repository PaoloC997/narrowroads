<template>
  <div class="p-main">
    <h2 class="p-title">{{ projectTitle }}</h2>
    <img :src="`/assets/${imageSrc}`" class="p-image" />
    <div class="p-text-container">
      <div class="p-flex-left">
        <p class="p-p">{{ videoText }}</p>
        <p class="p-p">{{ audioText }}</p>
      </div>
      <div class="p-flex-right">
        <img :src="`/assets/${thumbSrc}`" class="p-thumb" />

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Project',
  props: {
    projectTitle: String,
    videoText: String,
    audioText: String,
    imageSrc: String,
    thumbSrc: String
  }
};
</script>
<style>
.p-main {
  display: flex;
  flex-direction: column;
  height: 150vh;
  width: 90vw;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5rem;
}

.p-title{
    font-size: 5rem;
    text-transform: uppercase;
    color: gray;
}

.p-text-container {
  display: flex;
  flex-direction: row;
  height: 50vh;
  padding-top: 3rem;
}

.p-flex-left {
  flex: 1;
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  align-items: start;
}

.p-flex-right {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: end;
}

.p-p {
  color: black;
  font-size: 1.5rem;
}

.p-thumb {
    object-fit: cover;
    width:20vw;
}
</style>
