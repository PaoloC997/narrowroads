<template>
  <div class="p-main">
    <h2 class="p-title thin">{{ projectTitle }}</h2>
    <img :src="`/assets/${imageSrc}`" class="p-image" />
    <div class="p-text-container light">
      <div class="p-flex-left">
        <p class="p-st">FIXED REPRODUCTION</p>
        <hr class="bar" />
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
  max-height: 160vh;
  width: 90vw;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5rem;
}

.p-title{
    font-size: 8.5rem;
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
    text-transform: uppercase;
    color: gray;
}

.p-text-container {
  display: flex;
  flex-direction: row;
  height: 50vh;
  padding-top: 3rem;
  font-size: 2.5rem;
  margin-bottom: 3rem;
}

.p-flex-left {
  flex: 1;
  max-width: 40vw;
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  align-items: start;
  font-size: 2.5rem;
}

.p-flex-right {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: end;
}

.p-p {
  color: black;
  margin-bottom:1rem;
  padding-bottom: 0.2rem;
}

.p-st {
  color: black;
  margin-bottom:0px;
  color:gray;

}

.p-thumb {
    object-fit: cover;
    width:28vw;
    margin-top: 3rem;
}

.bar {
  color: gray;
  width:20vw;
  margin-left: 0px;
  margin-bottom: 0px;
}
</style>
