<template>
  <q-card class="project-card" bordered>
    <!-- Immagine del progetto -->
    <q-img v-if="project.image" :src="project.image" :alt="project.title" class="project-image">
      <template v-slot:thumbnail>
        <q-icon name="image" size="3em" />
      </template>
    </q-img>

    <!-- Contenuto della QCard -->
    <q-card-section>
      <div class="row items-center">
        <q-avatar icon="work" />
        <div class="q-mb-sm q-ml-sm">
          <h3 class="q-mb-xs">{{ project.title }}</h3>
          <p>{{ project.description }}</p>
        </div>
      </div>
    </q-card-section>

    <!-- Video del progetto (se presente) -->
    <q-card-section v-if="project.video">
      <video controls class="project-video">
        <source :src="project.video" type="video/mp4">
        Il tuo browser non supporta i video.
      </video>
    </q-card-section>

    <!-- Sezione con tecnologie e link al progetto -->
    <q-card-section>
      <p><strong>Tecnologie:</strong> {{ project.technologies.join(', ') }}</p>
    </q-card-section>

    <!-- Pulsanti -->
    <q-card-actions align="right">
      <q-btn flat label="Visualizza Progetto" color="primary" :to="project.link" target="_blank" />
    </q-card-actions>
  </q-card>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true
  }
});
</script>

<style scoped>
.project-card {
  max-width: 600px;
  margin: 20px;
}

.project-image {
  height: 200px;
}

.project-video {
  width: 100%;
  max-width: 100%;
  margin-top: 10px;
}
</style>
