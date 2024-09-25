<script setup>
defineProps({
  text: String,
});
</script>
<template>
  <v-card :elevation="0">
    <v-card-text style="font-size: 18px">{{ text }}</v-card-text>
  </v-card>
</template>
<style scoped>
.text-font {
  font-size: 18px;
}
</style>