<script setup>
defineProps({
  link: String,
  image: String,
  name: String,
  description: String,
  technologies: Array
})
</script>

<template>
  <v-card
    class="paragraph card-style"
  >
    <v-card-title>{{ name }}</v-card-title>
    <v-card-subtitle>
      <v-btn icon :href="link" target="_blank" variant="text">
        <v-icon>mdi-link-variant</v-icon>
      </v-btn>
    </v-card-subtitle>
    <v-card-text>
      <v-card variant="tonal" height="200">
        <v-card-text>
          <div>{{ description }}</div>
        </v-card-text>
      </v-card>
    </v-card-text>
    <v-row no-gutters>
      <div v-for="item in technologies" :key="item">
        <v-chip class="ml-2">
          {{ item }}
        </v-chip>
      </div>
    </v-row>
  </v-card>
</template>

<style scoped>
.paragraph{
  font-style: normal;
  font-family: Futura,sans-serif;
}
.card-style{
  height: 500px;
  width: 100%
}

@media (max-width: 960px) {
  .card-style{
    height: 500px;
    width: 60%;
    margin-left: 120px;
  }
}

.my-image {
  max-width: 100%;
  object-fit: cover;
}
</style>
