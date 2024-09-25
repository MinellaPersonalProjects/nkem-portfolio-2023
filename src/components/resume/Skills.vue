<script setup>
defineProps({
  skills: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <v-list class="multi-column-list">
    <v-list-item
      v-for="(item, index) in skills"
      :key="index"
      class="multi-column-item"
    >
      {{ item }}
    </v-list-item>
  </v-list>
</template>
<style scoped>
.multi-column-list {
  height: 450px;
  overflow: wrap;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 10px;
  background-color: inherit;
}

.multi-column-item {
  display: block;
}
</style>
