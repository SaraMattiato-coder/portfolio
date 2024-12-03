<template>
  <div>
    <h2>Progetti</h2>
    <div v-for="project in projects" :key="project.title">
      <Project :project="project" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Project from '../components/Project.vue';
const projects = ref([]);

onMounted(async () => {
  try {
    const response = await fetch(`${import.meta.env.BASE_URL}data/projects.json`);
    projects.value = await response.json();
  } catch (error) {
    console.error('Errore nel caricamento dei progetti:', error);
  }
});
</script>

<style scoped>
h2 {
  color: #1B0273;
}

.project-image,
.project-video {
  width: 100%;
  max-width: 600px;
  margin-top: 10px;
}
</style>