<template>
  <div>
     <router-view></router-view>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/projects">Projects</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>
