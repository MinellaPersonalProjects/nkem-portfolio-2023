<script setup>
defineProps({
  skills: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <v-container class="skills-container">
    <v-row>
      <v-col v-for="(group, category) in skills" :key="category" cols="12">
        <v-card variant="text" class="skill-group">
          <v-card-title class="category-header pa-0 mb-2 text-subtitle-2">
            {{ category }}
          </v-card-title>
          <v-card-text class="chips-container pa-0">
            <v-chip
              v-for="(skill, index) in group"
              :key="index"
              class="skill-chip ma-1"
              variant="outlined"
            >
              {{ skill }}
            </v-chip>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.skills-container {
  padding: 0;
}

.category-header {
  color: rgba(var(--v-theme-on-background), var(--v-medium-emphasis-opacity));
  font-family: "Futura", sans-serif;
}

.chips-container {
  display: flex;
  flex-wrap: wrap;
}
</style>