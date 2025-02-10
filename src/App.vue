<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/projects">Projects</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>
