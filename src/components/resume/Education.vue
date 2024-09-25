<script setup>
defineProps({
  name: String,
  location: String,
  degree: String,
});
</script>
<template>
  <div>
    <span
      ><b>{{ name }},</b> {{ location }}</span
    >
    <br />
    <span
      ><i>{{ degree }}</i></span
    >
  </div>
</template>