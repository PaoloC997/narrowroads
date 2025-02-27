<template>
  <div :class="id === 10 ? 'p-main' : 'p-main border'" ref="projectElement">
    <h2 class="p-title gray thin">{{ projectTitle }}</h2>
    <img :src="`/assets/${imageSrc}`" class="p-image" />
    <div class="p-text-container thin">
      <div class="p-flex-left">
        <p class="p-st">{{ type }}</p>
        <hr class="bar" />
        <div v-for="text in texts" :key="text.textTitle">
          <p class="p-p">
            <span v-if="text.isLink">
              <a class="p-link" :href="text.textContent" target="_blank" rel="noopener noreferrer">
                {{ text.textTitle }}
              </a>
            </span>
            <span v-else>
              <span class="gray">{{ text.textTitle }}</span>
              {{ text.textContent }}
            </span>
          </p>
        </div>
      </div>
      <div v-if="thumbSrc !== ''" class="p-flex-right">
        <img :id="id === 2 ? 'p-thumb-lg' : ''"  :src="`/assets/${thumbSrc}`" :class="id === 3 ? 'p-thumb-sm' : 'p-thumb'" />
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
    thumbSrc: String,
    id: Number,
    type: String,
    texts: Array
  },
  mounted() {
    this.scrollToTop();
  },
  methods: {
    scrollToTop() {
      const element = this.$refs.projectElement;
      if (element) {
        element.scrollIntoView({ block: 'start' });
      }
    }
  }
};
</script>
<style>
.p-main {
  display: flex;
  flex-direction: column;
  height: auto;
  width: 90vw;
  margin-left: auto;
  margin-right: auto;
  font-weight: 500;

}

.border {
  border-bottom: 1px solid #818181;
}

.p-title {
  font-size: 8.5rem;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  text-transform: uppercase;
  font-weight: 300;
}

.p-text-container {
  display: flex;
  flex-direction: row;
  padding-top: 3rem;
  font-size: 2.5rem;
  margin-bottom: 5rem;
  padding-bottom: 5rem;
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
  margin-bottom: 1rem;
  padding-bottom: 0.2rem;
  margin-top: 1rem;
}

.p-st {
  color: black;
  margin-bottom: 0.5rem;
  color: gray;

}

.p-thumb {
  object-fit: cover;
  width: 29vw;
  margin-top: 3rem;
}

.p-thumb-sm {
  object-fit: cover;
  width: 20vw;
  margin-top: 3rem;
}

#p-thumb-lg {
  transform: scale(1.2);
}

.p-link {
  text-decoration: none;
  color:black;
}

.bar {
  color: gray;
  width: 20vw;
  margin-left: 0px;
  margin-top: 0px;
  margin-bottom: 0px;
}

@media (max-width: 1200px) {
    
  .p-text-container {
  display: flex;
  flex-direction: column;
  padding-top: 3rem;
  font-size: 2.5rem;
  margin-bottom: 5rem;
  padding-bottom: 5rem;
}

.p-flex-left {
  flex: 1;
  max-width: 90vw;
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
  align-items: start;
  justify-items: start;
}

.p-thumb {
  object-fit: cover;
  width: 80vw;
  margin-top: 5rem;
}

.p-thumb-sm{
  object-fit: cover;
  width: 48vw;
  margin-top: 5rem;
  margin-bottom: 0px;
}

.p-title {
  font-size: 3rem;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  text-transform: uppercase;
  font-weight: 300;
}

}
</style>
